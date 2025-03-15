export type State = {
  items: string[];
  selectedIndex: number | null;
  history: string[][];
  showModal: boolean;
};

export type Action =
  | { type: "ADD_ITEM"; payload: string }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UNDO" }
  | { type: "TOGGLE_MODAL" }
  | { type: "SET_SELECTED_INDEX"; payload: number | null };

export const initialState: State = {
  items: [],
  selectedIndex: null,
  history: [],
  showModal: false,
};

export function appReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        history: [...state.history, state.items],
        items: [...state.items, action.payload],
        showModal: false,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        history: [...state.history, state.items],
        items: state.items.filter((_, i) => i !== action.payload),
        selectedIndex: null,
      };
    case "UNDO":
      return state.history.length > 0
        ? {
            ...state,
            items: state.history[state.history.length - 1],
            history: state.history.slice(0, -1),
          }
        : state;
    case "TOGGLE_MODAL":
      return { ...state, showModal: !state.showModal };
    case "SET_SELECTED_INDEX":
      return { ...state, selectedIndex: action.payload };
    default:
      return state;
  }
}

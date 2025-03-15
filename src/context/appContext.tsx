import { createContext, useReducer, ReactNode } from "react";
import { appReducer, initialState, State, Action } from "./appReducer";

type AppContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
import { ListItem } from "./ListItem";
import { useAppContext } from "../context/useAppContext";

export function List() {
  const { state } = useAppContext();
  return (
    <ul className="mt-4 bg-grayBg border border-border h-48 overflow-y-auto p-2 rounded-lg">
      {state.items.map((item, index) => (
        <ListItem key={index} text={item} index={index} />
      ))}
    </ul>
  );
}

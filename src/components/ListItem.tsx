import React from "react";
import { useAppContext } from "../context/useAppContext";

export const ListItem = React.memo(function ListItem({
  text,
  index,
}: {
  text: string;
  index: number;
}) {
  const { state, dispatch } = useAppContext();
  return (
    <li
      className={`p-2 cursor-pointer ${
        state.selectedIndex === index
          ? "bg-[#324bff] text-white"
          : "hover:bg-[#324bff80] hover:text-white"
      }`}
      onClick={() =>
        dispatch({
          type: "SET_SELECTED_INDEX",
          payload: index === state.selectedIndex ? null : index,
        })
      }
      onDoubleClick={() => dispatch({ type: "REMOVE_ITEM", payload: index })}
    >
      {text}
    </li>
  );
});

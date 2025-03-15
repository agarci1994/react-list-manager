import { useContext } from "react";
import { AppContext } from "./appContext";

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}

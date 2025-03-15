import React, { useState } from "react";
import { Button } from "./Button";

import { useAppContext } from "../context/useAppContext";

export const Modal = React.memo(() => {
  const [text, setText] = useState("");
  const { dispatch } = useAppContext();
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text) {
      dispatch({ type: "ADD_ITEM", payload: text });
      setText("");
    }
  };

  return (
    <>
      <div className="fixed top-30 bg-white p-6 rounded-xl shadow-custom w-full md:w-1/3 z-100">
        <h2 className="text-4xl text-center mb-4">Add item to list</h2>
        <input
          type="text"
          className="w-full p-2 border border-border bg-grayBg outline-none"
          placeholder="Type the text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <div className="flex justify-end gap-2 mt-4">
          <Button
            type="primary"
            onClick={() =>
              text && dispatch({ type: "ADD_ITEM", payload: text })
            }
          >
            ADD
          </Button>
          <Button
            type="secondary"
            onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
          >
            CANCEL
          </Button>
        </div>
      </div>
      <div className="fixed inset-0 flex items-center justify-center bg-black opacity-40" />
    </>
  );
});

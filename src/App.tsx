import { List } from "./components/List";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

import { useAppContext } from "./context/useAppContext";

export default function App() {
  const { state, dispatch } = useAppContext();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient">
      <div className="bg-white p-8 rounded-xl shadow-custom w-full max-w-4xl text-center md:max-w-6xl lg:max-w-8xl">
        <h1 className="text-5xl mb-4">Lista de textos</h1>
        <p className="text-gray-600 text-md mb-4">
          Esta aplicación te permite gestionar una lista de cadenas de texto de
          manera sencilla. Puedes agregar nuevas entradas, seleccionar y
          eliminar elementos, y deshacer la última acción realizada.
        </p>
        <List />
        <div className="flex justify-between mt-4">
          <div className="flex gap-2">
            <Button onClick={() => dispatch({ type: "UNDO" })} type="secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 50 50"
              >
                <path
                  d="M 25 2 A 2.0002 2.0002 0 1 0 25 6 C 35.517124 6 44 14.482876 44 25 C 44 35.517124 35.517124 44 25 44 C 14.482876 44 6 35.517124 6 25 C 6 19.524201 8.3080175 14.608106 12 11.144531 L 12 15 A 2.0002 2.0002 0 1 0 16 15 L 16 4 L 5 4 A 2.0002 2.0002 0 1 0 5 8 L 9.5253906 8 C 4.9067015 12.20948 2 18.272325 2 25 C 2 37.678876 12.321124 48 25 48 C 37.678876 48 48 37.678876 48 25 C 48 12.321124 37.678876 2 25 2 z"
                  fill="#324bff"
                ></path>
              </svg>
            </Button>
            <Button
              onClick={() =>
                state.selectedIndex !== null &&
                dispatch({ type: "REMOVE_ITEM", payload: state.selectedIndex })
              }
              type="secondary"
              disabled={state.selectedIndex === null}
            >
              DELETE
            </Button>
          </div>
          <Button
            onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
            type="primary"
          >
            ADD
          </Button>
        </div>
      </div>
      {state.showModal && <Modal />}
    </div>
  );
}

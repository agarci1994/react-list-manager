import { render, screen, fireEvent } from "@testing-library/react";
import { AppProvider } from "./context/appContext";
import App from "./App";
import { describe, it, expect } from "vitest";

const renderApp = () =>
  render(
    <AppProvider>
      <App />
    </AppProvider>
  );

describe("App Component", () => {
  it("render the title", () => {
    renderApp();
    expect(screen.getByText("Lista de textos")).toBeInTheDocument();
  });

  it("add a new item to the list", async () => {
    renderApp();

    const buttons = screen.getAllByText("ADD");
    fireEvent.click(buttons[0]);

    const input = screen.getByPlaceholderText("Type the text here...");
    fireEvent.change(input, { target: { value: "Nuevo Item" } });

    const buttonModal = screen.getAllByText("ADD");
    fireEvent.click(buttonModal[1]);

    expect(screen.getByText("Nuevo Item")).toBeInTheDocument();
  });

  it("delete a item to the lis", async () => {
    renderApp();

    const buttons = screen.getAllByText("ADD");
    fireEvent.click(buttons[0]);
    fireEvent.change(screen.getByPlaceholderText("Type the text here..."), {
      target: { value: "Item a borrar" },
    });
    const buttonModal = screen.getAllByText("ADD");
    fireEvent.click(buttonModal[1]);

    fireEvent.click(screen.getByText("Item a borrar"));
    fireEvent.click(screen.getByText("DELETE"));

    expect(screen.queryByText("Item a borrar")).not.toBeInTheDocument();
  });

  it("undo the last action", async () => {
    renderApp();

    const buttons = screen.getAllByText("ADD");
    fireEvent.click(buttons[0]);
    fireEvent.change(screen.getByPlaceholderText("Type the text here..."), {
      target: { value: "Elemento a deshacer" },
    });
    const buttonModal = screen.getAllByText("ADD");
    fireEvent.click(buttonModal[1]);

    const button = screen.getAllByRole("button");
    fireEvent.click(button[0]);

    expect(screen.queryByText("Elemento a deshacer")).not.toBeInTheDocument();
  });
});

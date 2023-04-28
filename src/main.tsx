import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import CheatsheetPage from "./pages/cheatsheet";
import { ModalProvider } from "./hooks/ModalProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <CheatsheetPage />
      <></>
    </ModalProvider>
  </React.StrictMode>
);

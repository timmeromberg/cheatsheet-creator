import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CheatsheetPage from "./pages/cheatsheet";
import { ModalProvider } from "./hooks/ModalProvider";
import GlobalStylesComponent from "./components/GlobalStylesComponent";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <GlobalStylesComponent>
          <ModalProvider>
              <CheatsheetPage />
              <></>
          </ModalProvider>
      </GlobalStylesComponent>
  </React.StrictMode>
);

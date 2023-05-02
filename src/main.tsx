import React from "react";
import * as ReactDOM from "react-dom/client";
import CheatsheetPage from "./pages/CheatsheetPage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ModalProvider } from "./hooks/ModalProvider";
import { Modals } from "./components/Modals";
import GlobalStylesComponent from "./components/GlobalStylesComponent";
import ErrorBoundary from "./application/ErrorBoundary";
import WindowWidthCheck from "./components/WindowWidthCheck";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/cheatsheet" />,
  },
  {
    path: "/cheatsheet",
    element: <CheatsheetPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <GlobalStylesComponent>
        <WindowWidthCheck minWidth={800}>
          <ModalProvider>
            <RouterProvider router={router} />
            <Modals />
          </ModalProvider>
        </WindowWidthCheck>
      </GlobalStylesComponent>
    </ErrorBoundary>
  </React.StrictMode>
);

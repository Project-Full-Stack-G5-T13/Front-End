import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import Providers from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);

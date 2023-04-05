import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

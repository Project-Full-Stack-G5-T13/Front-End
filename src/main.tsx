import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import Providers from "./contexts/UserContext";
import AdsContext from "./contexts/AdsContext";
import GlobalLoading from "./components/GlobalLoading";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Providers>
        <AdsContext>
          <GlobalLoading>
            <App />
          </GlobalLoading>
        </AdsContext>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/helpers/ScrollToTop";
import { store } from "./reduxTools/store";
import App from "./App";

import "./styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  // <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          <ScrollToTop/>
            <App />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  // </React.StrictMode>,
);

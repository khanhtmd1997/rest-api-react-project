import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux";
import { withTranslation } from "react-i18next";
import "./i18n";

const AppComponent = withTranslation()(App);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={<div></div>} persistor={persistor}>
      <BrowserRouter>
        <Suspense fallback="loading">
          <AppComponent />
        </Suspense>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

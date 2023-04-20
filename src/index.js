import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserDataProvider } from "./context/UserDataContext";
import MockupCalendario from "./components/MockupCalendario/MockupCalendario";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserDataProvider>
      <MockupCalendario></MockupCalendario>
      {/* <App /> */}
    </UserDataProvider>
  </React.StrictMode>
);

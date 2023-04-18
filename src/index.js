import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LoginContextProvider } from "./context/LoginContext";
import {UserTypeProvider} from "./context/UserTypeContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserTypeProvider>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
    </UserTypeProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UsersProvider } from "./contexts/userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // 2x rendering in dev mode ,
  // error during dev

  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>
);

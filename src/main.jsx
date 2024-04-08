import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // 2x rendering in dev mode ,
  // error during dev

  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx"
import "./App.css"

ReactDom.createRoot(document.querySelector("#root")).render(
    <App/>
);
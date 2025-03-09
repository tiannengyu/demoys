import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./components/HomePage";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

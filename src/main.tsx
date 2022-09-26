import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SimulationProvider } from "./context/SimulationContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SimulationProvider>
      <App />
    </SimulationProvider>
  </React.StrictMode>
);

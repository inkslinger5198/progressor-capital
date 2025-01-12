import { StrictMode } from "react";
import { HashRouter, Routes, Route  } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

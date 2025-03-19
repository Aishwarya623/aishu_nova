import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import "./index.css";

// Use BrowserRouter with basename for GitHub Pages
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/aishu_nova"> {/* Replace with your repo name */}
    <App />
  </BrowserRouter>
);

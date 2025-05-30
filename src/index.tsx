import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reports from "./components/Reports";
import { ToDoProvider } from "./contexts/ToDoContext";

const container = document.getElementById("root");

if(!container) {
  throw new Error("Root element not found. Make sure you have a div with id 'root' in your HTML.");
}

const root = ReactDOM.createRoot(container);
root.render(
  <ToDoProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  </ToDoProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

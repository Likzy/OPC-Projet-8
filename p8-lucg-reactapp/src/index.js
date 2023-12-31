import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/about_page";
import Home from "./pages/Home/";
import NotFound from "./pages/Notfound/notfound_page";
import reportWebVitals from "./reportWebVitals";
import Lodging from "./pages/Lodging/lodging_page";

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging" element={<Home />} />
        <Route path="/logement/:id" element={<Lodging />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

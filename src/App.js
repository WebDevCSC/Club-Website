/* eslint-disable */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./views/Home/Home";
import Team from "./views/Team/Team";
import ScrollToTop from "./ScrollToTop";
import NewsletterDisplay from "./views/Newsletter/NewsletterDisplay";

const App = () => (
  <div>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/newsletter" element={<NewsletterDisplay />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ScrollToTop>
  </div>
);

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Car from "./pages/Car.jsx";
import Overview from "./pages/Overview.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Overview" element={<Overview/>} />
            <Route path="/EV" element={<Car />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import OurServices from "./components/OurServices";
import Link from "./components/Link";
import SignUp from "./components/SignUp";
import { useEffect, useState } from "react";

function App() {
  const [hideP, setHideP] = useState(window.innerWidth);

  useEffect(() => {
    setHideP(window.innerWidth);
  }, []);

  return (
    <BrowserRouter>
      <div
        className={`d-flex flex-column justify-content-center position-relative ${
          hideP < 768 ? "vh-0" : "vh-100"
        }`}
      >
        <header className="fixed-top">
          <NavBar />
        </header>
        <main className="container-fluid flex-grow-1 mt-5 pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OurServices" element={<OurServices />} />
            <Route path="/Link" element={<Link />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </main>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

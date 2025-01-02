import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import MortgageTech from "./pages/MortgageTech";
import WhatWeDo from "./pages/WhatWeDo";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <>
      <main className="p-0 m-0">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Hero />} />
            <Route path="/how-it-works" element={<MortgageTech />} />
            <Route path="/our-courses" element={<WhatWeDo />} />
            <Route path="/faq" element={<FAQs />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;

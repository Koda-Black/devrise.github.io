import "./App.css";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import MortgageTech from "./pages/MortgageTech";
import WhatWeDo from "./pages/WhatWeDo";
import Testimonials from "./pages/Testimonials";
import FAQs from "./pages/FAQs";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <main className="p-0 m-0">
        <Header />
        <Hero />
        <MortgageTech />
        <WhatWeDo />
        <FAQs />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

export default App;

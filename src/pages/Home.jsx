import Hero from "./Hero";
import MortgageTech from "./MortgageTech";
import WhatWeDo from "./WhatWeDo";
import Testimonials from "./Testimonials";
import FAQs from "./FAQs";
import Footer from "./Footer";

const Home = () => {
  return (
    <section>
      <div id="hero">
        <Hero />
      </div>
      <div id="mortgage-tech">
        <MortgageTech />
      </div>
      <div id="what-we-do">
        <WhatWeDo />
      </div>
      <div id="faqs">
        <FAQs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>

      <Footer />
    </section>
  );
};

export default Home;

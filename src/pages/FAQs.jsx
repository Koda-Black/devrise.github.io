import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import faqLady from "../assets/images/faqLady3.png";

import microsoftLogo from "../assets/images/DevRise Logo dark.png";
import googleLogo from "../assets/images/Devrise Logo white.png";
import teslaLogo from "../assets/images/DevRise Logo dark.png";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const logos = [
    { src: microsoftLogo, alt: "Microsoft Logo" },
    { src: googleLogo, alt: "Google Logo" },
    { src: teslaLogo, alt: "Tesla Logo" },
    { src: teslaLogo, alt: "Tesla Logo" },
    { src: teslaLogo, alt: "Tesla Logo" },
  ];

  const faqItems = [
    {
      question: "Is DEVRISE a paid training?",
      answer:
        "Bootcamps are free training but the personal mentorship community is a paid training.",
    },
    {
      question: "Do I need to be physically available?",
      answer: "No. You can be part of DEVRISE training virtually.",
    },
    {
      question: "Do I need any prior experience?",
      answer:
        "Not exactly but if you know the basics, it will make your journey easier.",
    },
    {
      question: "Do I get a certificate at the end of the program?",
      answer: "Yes, you will.",
    },
    {
      question: "Is the Program just for Nigerians?",
      answer:
        "No, DEVRISE is designed for every professional around the world seeking to pivot into tech.",
    },
  ];

  return (
    <section>
      <div className="bg-light-blue2 pt-40 lg:pt-80 lg:pb-0 usm:pt-0 usm:mt-[30rem] lg:mt-0 xl:mt-0 xl:pb-0 usm:pb-8">
        <div className="flex flex-wrap justify-between px-16 usm:px-8 xl:px-24">
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0 xl:mb-0 h-full">
            <img
              src={faqLady}
              loading="lazy"
              alt="Faqs Image"
              className="w-full h-full object-cover lg:w-[90%] xl:w-[100%] transform scale-x-[-1]"
            />
          </div>
          <div className="relative w-full lg:w-3/5 flex flex-col justify-center text-left usm:mt-[-12rem] sm:mt-[-18rem] xl:mt-0">
            <h2 className="text-base font-semibold leading-7 text-primary-color">
              FAQ
            </h2>
            <p className="text-2xl font-bold tracking-tight text-dark sm:text-4xl uppercase text-left mb-8 sm:text-white usm:text-white lg:text-dark">
              Frequently <br /> asked questions
            </p>
            <div className="space-y-1">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-md p-2">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left text-lg usm:text-md font-medium text-dark focus:outline-none flex justify-between items-center bg-white border border-transparent"
                  >
                    {item.question}
                    <ChevronDownIcon
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeIndex === index ? "transform rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {activeIndex === index && (
                    <div className="mt-2 usm:text-md text-gray-700 px-6">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-32 pb-16 usm:px-8 usm:pt-8 xl:pt-40">
        <div className="relative">
          <p className="mx-auto text-3xl usm:text-2xl font-bold tracking-tight text-black sm:text-4xl uppercase">
            Our mentors are from
          </p>
          <div className="overflow-hidden py-10">
            <div className="flex space-x-20 items-center justify-center animate-slide">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-40 p-4 rounded-lg"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

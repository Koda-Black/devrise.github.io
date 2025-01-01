import {
  UserGroupIcon,
  BriefcaseIcon,
  FingerPrintIcon,
  GiftIcon,
} from "@heroicons/react/20/solid";
import productDesign from "../assets/images/productDesign2.jpg";
import frontend from "../assets/images/2659430.jpg";
import backend from "../assets/images/backendDev2.webp";
import homeApp from "../assets/images/furniture-shopping-app-interface.png";

const WhatWeDo = () => {
  const stats = [
    {
      id: 1,
      name: "Apply Online",
      description: "Fill in the application form we provided.",
      value: (
        <UserGroupIcon
          className="h-8 w-8 text-primary-color"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 2,
      name: "Virtual Interview",
      description: "You’ll be invited for a virtual interview.",
      value: (
        <BriefcaseIcon
          className="h-8 w-8 text-primary-color"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 3,
      name: "Get Selected",
      description: "Get an email from us confirming that you are in.",
      value: (
        <FingerPrintIcon
          className="h-8 w-8 text-primary-color"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 4,
      name: "Start the Experience",
      description: "Begin your DEVRISE journey instantly!",
      value: (
        <GiftIcon className="h-8 w-8 text-primary-color" aria-hidden="true" />
      ),
    },
  ];
  return (
    <section className="lg:px-0 py-0">
      <div className="text-center bg-primary-color pt-8 pb-32 usm:px-8 usm:pb-48">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Take the Next Step
        </h2>
        <p className="mt-2 text-3xl usm:text-2xl font-bold tracking-tight text-bleach-white sm:text-4xl uppercase">
          How To Apply
        </p>
        <p className="mx-auto lg:w-1/2 md:w-3/4 sm:w-[90%] w-full text-center text-dark-grey">
          Taking charge of your career growth doesn’t have to interfere with
          your current job performance—when approached the right way, you can
          achieve both.
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="absolute py-8 usm:pt-16">
          <div className="mx-auto max-w-4xl shadow-md">
            <dl className="grid grid-cols-4 usm:grid-cols-2 gap-y-10 usm:p-4 sm:p-8 gap-x-10 p-8 text-center items-center divide-gray-200 md:divide-x-1 lg:divide-x-2 bg-dark-grey">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4 items-center"
                >
                  <dt className="text-base leading-7 text-gray-600 sm:text-md font-semibold">
                    {stat.name}
                  </dt>
                  <dd className="text-base leading-5 text-gray-700 sm:text-sml">
                    {stat.description}
                  </dd>
                  <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-lg">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="pt-36 pb-4 usm:pt-52 usm:pb-28 usm:px-8">
        <div className="mt-10 mb-20 usm:my-20 items-center mx-auto">
          <a
            href="#"
            className="rounded-md bg-primary-color px-5 py-4 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Apply
          </a>
        </div>
        <p className="mt-2 text-3xl usm:text-2xl font-bold tracking-tight text-primary-color sm:text-4xl uppercase">
          Our Courses
        </p>
        <p className="mx-auto lg:w-1/2 md:w-3/4 sm:w-[90%] w-full text-center py-4">
          We’ve carved out 3 major learning paths for you to explore. If you are
          having a hard time making choice, get in touch, we’d be happy to help.
        </p>
        <div className="flex justify-center px-40 usm:px-0 py-10">
          <div className="flex flex-row space-x-10 usm:flex-col usm:gap-8  usm:space-x-0">
            <div className="h-350 w-200 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row items-center">
              <img
                src={frontend}
                alt="Mortgage Home screenshot"
                className="w-[350px] sm:w-[300px] h-auto object-cover"
              />
              <div className="sm:flex sm:flex-col sm:pl-4">
                <h3 className="mt-4 sm:mt-0 sm:mb-4 sm:text-lg text-center sm:text-left font-bold py-4 sm:py-0">
                  Frontend Development
                </h3>
                <p className="text-center sm:text-left">
                  Building dynamic UIs with React, Next.js, and JavaScript,
                  styled with Tailwind CSS. Streamlining workflows using NPM and
                  Vite.
                </p>
              </div>
            </div>

            <div className="h-350 w-200 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row items-center">
              <img
                src={backend}
                alt="Mortgage Home screenshot"
                className="w-[350px] sm:w-[300px] h-auto object-cover"
              />
              <div className="sm:flex sm:flex-col sm:pl-4">
                <h3 className="mt-4 sm:mt-0 sm:mb-4 sm:text-lg text-center sm:text-left font-bold py-4 sm:py-0">
                  Backend Development
                </h3>
                <p className="text-center sm:text-left">
                  Developing robust APIs with Node.js and Python, managing
                  databases with MongoDB, and optimizing performance with Nginx.
                </p>
              </div>
            </div>

            <div className="h-350 w-200 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row items-center">
              <img
                src={productDesign}
                alt="Mortgage Home screenshot"
                className="w-[350px] sm:w-[300px] h-auto object-cover"
              />
              <div className="sm:flex sm:flex-col sm:pl-4">
                <h3 className="mt-4 sm:mt-0 sm:mb-4 sm:text-lg text-center sm:text-left font-bold py-4 sm:py-0">
                  Product Design
                </h3>
                <p className="text-center sm:text-left">
                  Designing UIs, enhancing UX, building brands, applying design
                  thinking, organizing information, and crafting project copy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-color py-20 usm:pb-72">
        <div className="flex flex-wrap justify-between px-16 usm:px-8">
          <div className="w-full lg:w-2/5 mb-8 sm:mb-28 lg:mb-0">
            <p className="mt-2 text-3xl usm:text-2xl font-bold tracking-tight text-bleach-white sm:text-4xl uppercase text-left">
              Everything you need to know all in one place
            </p>
            <p className="mt-4 text-base text-left text-bleach-white">
              Get ready for Devrise, the app that connects you to a global
              community of learners and tech professionals. Whether you are new
              to tech or looking to level up, Devrise offers the resources,
              workshops, and real-world projects to help you grow. Join a
              diverse, worldwide network where you can learn, collaborate, and
              expand your career. Devrise isn’t just an app—it’s a movement.
              Stay tuned—Devrise app is coming soon, and you won’t want to miss
              it!
            </p>
            <div className="mt-4 items-left flex flex-row justify-start">
              <button className="mt-4 bg-white text-primary-color font-semibold py-4 px-8 rounded">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative w-full lg:w-3/5 flex justify-center lg:justify-center">
            <div className="relative right-[-7.6rem] sm:right-[-16.6rem] md:right-[-21.6rem] top-0 bg-dark-yellow h-12 w-12 z-50 rounded-tr-3xl"></div>
            <div className="absolute mt-{-16} bg-bleach-white p-8 sm:right-0 rounded-tr-3xl">
              <h2 className="text-3xl font-bold leading-7 text-gray-900 text-left uppercase">
                The <br />
                DEVRISE App
              </h2>
              <img
                src={homeApp}
                alt="Descriptive Alt Text"
                className="w-full max-w-64 h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

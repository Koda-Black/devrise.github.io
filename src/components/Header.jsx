import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import copyLogo from "../assets/images/DevRise Logo dark.png";

const Header = () => {
  const navigation = [
    { name: "Home", href: "hero", current: false },
    { name: "About", href: "mortgage-tech", current: false },
    { name: "How it works", href: "what-we-do", current: false },
    { name: "Our Courses", href: "testimonials", current: false },
    { name: "FAQ", href: "faqs", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header className="mt-0 shadow-lg ">
      <Disclosure as="nav" className="bg-hero-light">
        {({ open }) => (
          <>
            <div className="mx-auto w-full px-2 xl:px-24 sm:px-6 lg:px-16">
              <div className="relative flex h-24 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="menu-button relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-16 usm:h-12 md:h-14"
                      src={copyLogo}
                      alt="Your Company"
                    />
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 lg:space-x-0 xl:space-x-0">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          smooth={true}
                          duration={3000}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"(item.name - "btn")
                              : "text-dark hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 sm:px-0 lg:px-6 xl:px-8 2xl:px-10 py-2 text-md font-medium uppercase cursor-pointer"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-500 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;

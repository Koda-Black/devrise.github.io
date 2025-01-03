import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

import copyLogo from "../assets/images/Devrise Logo white.png";

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { name: "Our mission", href: "#" },
        { name: "Our vision", href: "#" },
        { name: "Courses", href: "#" },
        { name: "Our strategy", href: "#" },
        { name: "Career pivot", href: "https://tinyurl.com/Career-pivot" },
        { name: "Community tour", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Why us", href: "#" },
        { name: "How to start", href: "#" },
        { name: "Job opportunities", href: "#" },
        { name: "Interview prep", href: "#" },
        { name: "Frontend development", href: "#" },
        { name: "Backend development", href: "#" },
        { name: "UI/UX", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    {
      icon: <FaLinkedinIn />,
      href: "https://tinyurl.com/LinkedIn-Devrise",
      iconName: "LinkedIn",
    },
    {
      icon: <FaFacebookF />,
      href: "https://tinyurl.com/facebook-devrise",
      iconName: "Facebook",
    },
    {
      icon: <FaTwitter />,
      href: "https://tinyurl.com/X-Devrise",
      iconName: "Twitter",
    },
    {
      icon: <FaInstagram />,
      href: "https://tinyurl.com/Instagram-Devrise",
      iconName: "Instagram",
    },
    { icon: <FaTiktok />, href: "#", iconName: "Tiktok" },
    {
      icon: <FaYoutube />,
      href: "https://tinyurl.com/Youtube-Devrise",
      iconName: "Youtube",
    },
  ];

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10 xl:px-20 mxl:max-w-[100%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Logo and Address */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-14 w-auto"
                  src={copyLogo}
                  alt="Your Company"
                />
              </div>
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-400 hover:text-white">Visit us at:</p>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  No 24 Kenneth Street, Ameachi, Enugu State, Nigeria
                </a>
              </li>
            </ul>
          </div>

          {/* Dynamic Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Connected
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-400 text-sml py-5 sm:w-[60%] lg:w-[100%]">
                  Join our mailing list to receive information about our work
                  and new learning opportunities
                </p>
              </li>
              <li className="relative flex items-center">
                <input
                  className="text-dark bg-white text-md p-4 font-semibold rounded-l-sm max-w-[18rem] flex-grow pr-12 lg:pr-0 lg:w-[70%]"
                  placeholder="Enter Your Email"
                />
                <button
                  className="w-16 h-16 flex items-center sm:ml-[-2rem] usm:ml-[-1rem] justify-center bg-red-600 hover:bg-red-700 rounded-sm outline-none animate-move-arrow"
                  onClick={() => alert("Arrow clicked!")}
                >
                  <FaArrowRight className="h-5 w-5 text-white" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Social Media */}
      <div className="mt-12 py-6 px-16 bg-slate-500 text-white uppercase flex usm:flex-col-reverse lg:flex-row usm:gap-8 justify-between items-center mxl:px-24">
        <p className="usm:text-sm">&copy; Devrise 2024. All rights reserved.</p>
        <div className="flex space-x-6">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`text-white hover:text-primary-color text-2xl ${social.iconName.toLowerCase()}-button`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Up Button */}
      <a
        href="#"
        className="scroll-up bg-primary-color text-white p-3 rounded-lg shadow-lg hover:bg-secondary-color transition duration-300 fixed bottom-5 right-5"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FaArrowUp className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Footer;

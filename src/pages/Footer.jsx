import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaMediumM,
  FaArrowRight,
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
        { name: "Career pivot", href: "#" },
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
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaTiktok />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
    { icon: <FaMediumM />, href: "#" },
  ];

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10">
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
                <p className="text-gray-400 text-sml py-5 sm:w-[60%]">
                  Join our mailing list to receive information about our work
                  and new learning opportunities
                </p>
              </li>
              <li className="relative flex items-center">
                <input
                  className="text-dark bg-white text-md p-4 font-semibold rounded-l-sm max-w-[18rem] flex-grow pr-12"
                  placeholder="Enter Your Email"
                />
                <button
                  className="w-16 h-16 flex items-center sm:ml-[-2rem] justify-center bg-red-600 hover:bg-red-700 rounded-sm outline-none animate-move-arrow"
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
      <div className="mt-12 py-6 px-16 bg-slate-500 text-white uppercase flex usm:flex-col-reverse usm:gap-8 justify-between items-center">
        <p>&copy; Devrise 2024. All rights reserved.</p>
        <div className="flex space-x-6">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-white hover:text-indigo-600 text-2xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        "move-arrow": "move 1.5s ease-in-out infinite",
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-overlay":
          "linear-gradient(to right, rgba(29, 78, 216, 0.5), rgba(236, 72, 153, 0.5))",
        "map-bg": "url('/assets/images/map-bg.png')",
        "map-bg-1": "url('/src/assets/images/bg-1.jpg')",
        "map-bg-2": "url('/src/assets/images/DevRise Hero.png')",
        "map-bg-3": "url('/src/assets/images/BG-3.png')",
      },
      colors: {
        "bleach-white": "rgba(255, 255, 255, 0.95)",
        dark: "#252530",
        // "hero-light": "#FDFFFF",
        "light-dark": "#1E1E1E",
        "light-grey": "#F0F0FA",
        milk: "#E6EEFD",
        "dark-blue": "#0653EA",
        "sky-blue": "#F4F8FF",
        "sky-blue-100": "rgba(244, 248, 255, 1)",
        "light-blue": "#78A6FF",
        "light-blue-100": "#DFDFFF",
        "bleach-blue": "#DEF1FF",
        "bleach-blue-100": "#bde3ff33",
        "light-blue2": "rgba(6, 83, 234, 0.10)",
        "light-brown": "rgba(63, 61, 86, 0.75)",
        "dark-brown": "#3F3D56",
        "bleach-brown": "rgba(63, 61, 86, 0.75)",
        "light-red": "#FC6681",
        "light-red-100": "#C80000",
        "bleach-red": "rgba(255, 199, 194, 0.5)",
        "light-green": "#29AE55",
        "bleach-green": "#BED9C7",
        "dark-green": "#1A572E",
        "dark-yellow": "#FFC60C",
        "light-yellow": "#FFF6D8",
        "light-black": "#222222",
        "light-grey2": "#87878D",
        "dark-grey": "#D9D9D9",
        "light-green2": "#1FD387",
      },
      fontFamily: {
        sans: ["poppins", "sans-serif"],
        lato: ["Lato"],
      },
      fontSize: {
        xxs: "8px",
        xs: "10px",
        sm: "12px",
        sml: "14px",
        base: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "50px",
        "6xl": "100px",
      },
      transitionDuration: {
        2000: "5000ms",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

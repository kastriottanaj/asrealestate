/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dbefff",
          200: "#bfe3ff",
          300: "#93d1ff",
          400: "#60b6ff",
          500: "#3b96fb",
          600: "#1e88e5",
          700: "#1a6fc2",
          800: "#1c5d9d",
          900: "#1d4f7d",
          950: "#133255",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(30, 136, 229, 0.25)",
        soft: "0 4px 20px -4px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "hero-grad":
          "linear-gradient(135deg, rgba(20,70,130,0.92) 0%, rgba(30,136,229,0.85) 100%)",
      },
    },
  },
  plugins: [],
};

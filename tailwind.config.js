/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {

      /* =====================================================
         Color System — Production Ready
      ===================================================== */

      colors: {

        /* Brand Colors */

        primary: {
          blue: "#0f2c59",
          blueDark: "#071a33",

          green: "#22c55e",
          greenDark: "#16a34a"
        },

        /* Secondary / UI Colors */

        secondary: {
          blue: "#1e40af",
          blueLight: "#3b82f6"
        },

        /* Neutral System */

        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827"
        }

      },

      /* =====================================================
         Typography
      ===================================================== */

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },

      /* =====================================================
         Spacing & Layout
      ===================================================== */

      maxWidth: {
        container: "1280px"
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      },

      /* =====================================================
         Shadows
      ===================================================== */

      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)",
        card: "0 15px 40px rgba(0,0,0,0.12)",
        button: "0 8px 20px rgba(0,0,0,0.15)"
      }

    }
  },

  plugins: []
};
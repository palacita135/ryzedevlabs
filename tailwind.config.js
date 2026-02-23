/** @type {import('tailwindcss').Config} */
module.exports = {
  // Added "./index.ts" to ensure root styling is captured
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./index.ts"],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
          950: '#020617',
        }
      }
    },
  },
  plugins: [],
  // This ensures NativeWind doesn't clash with standard web CSS
  corePlugins: {
    preflight: true, 
  },
}

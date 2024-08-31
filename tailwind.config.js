import { scale } from "@cloudinary/url-gen/actions/resize";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1892a5",
        secondry: "#08535e",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { scale: "0.9" },
          "50%": { scale: "1" },
        },
      },
      animation: {
        prime: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

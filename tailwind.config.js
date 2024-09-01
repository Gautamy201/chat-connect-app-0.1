import { scale } from "@cloudinary/url-gen/actions/resize";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //  #c6af2a, #84fcc4, #743d19, #57aaa0, #8dc5b9, #253649
      colors: {
        primary: "#1892a5",
        secondry: "#08535e",
        brand: "#253649",
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

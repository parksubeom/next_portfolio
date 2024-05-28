import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      pre: ["Pretendard Variable"],
    },
    extend: {
      clipPath: {
        inset: "(0px 80% 100% 0px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 90deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        identifier: "identifier 7s ease 0s infinite normal none running",
        identifier2: "identifier 7s ease 0.1s infinite normal none running",
        identifier3: "identifier 7s ease 0.2s infinite normal none running",
        identifier4: "identifier 7s ease 0.3s infinite normal none running",
        identifier5: "identifier 7s ease 0.4s infinite normal none running",
        identifier6: "identifier 7s ease 0.5s infinite normal none running",
        identifier7: "identifier 7s ease 0.6s infinite normal none running",
        identifier8: "identifier 7s ease 0.7s infinite normal none running",
        identifier9: "identifier 7s ease 0.8s infinite normal none running",
        identifier10: "identifier 7s ease 0.9s infinite normal none running",
        identifier11: "identifier 7s ease 1s infinite normal none running",
        identifier12: "identifier 7s ease 1.1s infinite normal none running",
        identifier13: "identifier 7s ease 1.2s infinite normal none running",
        identifier14: "identifier 7s ease 1.3s infinite normal none running",
        identifier15: "identifier 7s ease 1.4s infinite normal none running",
        movingimage: "movingImage 5s ease 0s infinite normal none running ;",
        movingimage2: "movingImage2 5s ease 0s infinite normal none running ;",
        movingimage3: "movingImage3 5s ease 0s infinite normal none running ;",
        movingimage4: "movingImage4 5s ease 0s infinite normal none running ;",
        movingimage5: "movingImage5 5s ease 0s infinite normal none running ;",
      },
      keyframes: {
        identifier: {
          "0%": { opacity: "0", filter: "blur(20px)" },
          "20%": { opacity: "1", filter: "blur(0px)" },
          "80%": { opacity: "1", filter: "blur(0px)" },
          "100%": { opacity: "0", filter: "blur(20px)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-path": {
          "clip-path": "inset(0px 80% 100% 0px)",
        },
        ".clip-path2": {
          "clip-path": "inset(5% 60% 100% 21%)",
        },
        ".clip-path3": {
          "clip-path": "inset(10% 40% 100% 41%)",
        },
        ".clip-path4": {
          "clip-path": "inset(15% 20% 100% 61%)",
        },
        ".clip-path5": {
          "clip-path": "inset(20% 0% 100% 81%)",
        },

        // 다른 모양을 추가할 수 있습니다.
      });
    },
  ],
};
export default config;

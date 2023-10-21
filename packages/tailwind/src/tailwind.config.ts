import plugin from "tailwindcss/plugin";
import { RegularFontSizes, MediumFontSizes, SemiboldFontSizes } from "./theme";
import { type Config } from "tailwindcss";

export * from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: { min: "1025px" },
        mobile: { max: "1024px" },
      },
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    fontSize: false as never as any,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    fontFamily: false as never as any,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        [RegularFontSizes.CAPTION]: {
          "font-size": "12px",
          "font-weight": "400",
          "font-family": "regular",
          "line-height": "15px",
        },
        [RegularFontSizes.SUBHEADLINE]: {
          "font-size": "14px",
          "font-weight": "400",
          "font-family": "regular",
          "line-height": "20px",
        },
        [RegularFontSizes.BODY]: {
          "font-size": "16px",
          "font-weight": "400",
          "font-family": "regular",
          "line-height": "24px",
        },
        [RegularFontSizes.BODY_LARGE]: {
          "font-size": "18px",
          "font-weight": "400",
          "font-family": "regular",
          "line-height": "26px",
        },
        [RegularFontSizes.HEADLINE]: {
          "font-size": "20px",
          "font-weight": "400",
          "font-family": "regular",
          "line-height": "24px",
        },
        [MediumFontSizes.CAPTION]: {
          "font-size": "12px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "16px",
        },
        [MediumFontSizes.SUBHEADLINE]: {
          "font-size": "14px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "20px",
        },
        [MediumFontSizes.CALLOUT]: {
          "font-size": "16px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "24px",
        },
        [MediumFontSizes.BODY]: {
          "font-size": "18px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "26px",
        },
        [MediumFontSizes.HEADLINE]: {
          "font-size": "20px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "26px",
        },
        [MediumFontSizes.TITLE_S]: {
          "font-size": "22px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "28px",
        },
        [MediumFontSizes.TITLE_M]: {
          "font-size": "24px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "32px",
        },
        [MediumFontSizes.TITLE_L]: {
          "font-size": "26px",
          "font-weight": "500",
          "font-family": "medium",
          "line-height": "32px",
        },
        [SemiboldFontSizes.TITLE_XL]: {
          "font-size": "32px",
          "font-weight": "600",
          "font-family": "semi-bold",
          "line-height": "48px",
        },
        [MediumFontSizes.TITLE_XXL]: {
          "font-size": "76px",
          "font-weight": "800",
          "font-family": "medium",
          "line-height": "64px",
        },
        ".content-auto": {
          contentVisibility: "none",
        },
      });
    }),
  ],
} satisfies Config;

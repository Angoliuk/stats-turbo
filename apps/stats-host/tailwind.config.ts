import defaultConfig, { type Config } from "@stats/tailwind";

export default {
  presets: [defaultConfig],
  content: ["./src/**/*.{js,ts,jsx,tsx}", "../../packages/web-shared/src/**/*.{js,ts,jsx,tsx}"],
} satisfies Config;

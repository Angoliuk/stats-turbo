import defaultConfig, { type Config } from "@stats/tailwind";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [defaultConfig],
} satisfies Config;

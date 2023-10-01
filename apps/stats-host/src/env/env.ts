import { cleanEnv, num as number, str as string, url } from "envalid";

export class Environment {
  public static config(env: unknown) {
    return cleanEnv(env, {
      MODE: string({
        desc: "The mode the web is running in",
        example: "development",
        choices: ["development", "test", "production"] as const,
        default: "development",
      }),
      VITE_API_HOST: url({
        desc: "API url",
        example: "http://localhost:5555/trpc",
        default: "http://localhost:5555/trpc",
      }),
      VITE_APP_PORT: number({ desc: "App port", example: "5521", default: 5521 }),
    });
  }
}

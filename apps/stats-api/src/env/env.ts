import { cleanEnv, port, str as string, url } from "envalid";

export class Environment {
  public static config() {
    return cleanEnv(process.env, {
      DATABASE_URL: url({
        desc: "DB link",
        example: "postgresql://postgres:postgres@postgres:5432/stats?schema=public&connect_timeout=300",
        default: "postgresql://postgres:postgres@postgres:5432/stats?schema=public&connect_timeout=300",
      }),
      REDIS_DATABASE_URL: url({
        desc: "Redis DB link",
        example: "redis://default:@redis:6379",
        default: "redis://default:@redis:6379",
      }),
      PORT: port({
        desc: "Server is running on that post",
        example: "5555",
        default: 5555,
      }),
      FRONTEND_HOST: url({
        desc: "Frontend url",
        example: "http://localhost:5521",
        default: "http://localhost:5521",
      }),
      NODE_ENV: string({
        desc: "The mode the Express is running in",
        example: "development",
        choices: ["development", "test", "production"] as const,
        default: "development",
      }),
    });
  }
}

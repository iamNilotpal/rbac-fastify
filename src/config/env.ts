import { AppEnvironment } from "@/types/common";
import z from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string(),
  APP_LOG_LEVEL: z.string(),
  NODE_ENV: z.custom<AppEnvironment>(),
  APP_PORT: z.string().default("3001"),
  APP_HOST: z.string().default("localhost"),
  APP_BASE_URL: z.string().default("http://127.0.0.1:3001"),
});

export const envVariables = envSchema.parse(process.env);

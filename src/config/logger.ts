import type { AppEnvironment } from "@/types/common";
import type { FastifyServerOptions, LogLevel } from "fastify";
import { envVariables } from "./env";

export const envToLogger: {
  [K in AppEnvironment]: FastifyServerOptions["logger"];
} = {
  production: true,
  development: {
    redact: ["DATABASE_URL"],
    level: envVariables.APP_LOG_LEVEL as LogLevel,
    transport: {
      target: "pino-pretty",
      options: {
        ignore: "pid,hostname",
        translateTime: "HH:MM:ss Z",
      },
    },
  },
};

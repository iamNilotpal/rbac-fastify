import { envVariables } from "@/config/env";
import { envToLogger } from "@/config/logger";
import Fastify from "fastify";

export type AppServerType = Awaited<ReturnType<typeof buildServer>>;

export const buildServer = async () => {
  const environment = envVariables.NODE_ENV;
  const fastify = Fastify({ logger: envToLogger[environment] ?? true });
  return fastify;
};

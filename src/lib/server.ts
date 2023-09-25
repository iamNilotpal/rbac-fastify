import { envVariables } from "@/config/env";
import { envToLogger } from "@/config/logger";
import { applicationRoutes } from "@/modules/applications/applications.route";
import Fastify from "fastify";

export type AppServerType = Awaited<ReturnType<typeof buildServer>>;

export const buildServer = async () => {
  const environment = envVariables.NODE_ENV;
  const fastify = Fastify({ logger: envToLogger[environment] ?? true });

  // Routes
  fastify.register(applicationRoutes, { prefix: "/api/applications" });

  return fastify;
};

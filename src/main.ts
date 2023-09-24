import dotenv from "dotenv";
dotenv.config();

import { envVariables } from "./config/env";
import { SHUTDOWN_SIGNALS } from "./constants/signal-codes";
import { buildServer } from "./lib/server";

const startServer = async () => {
  try {
    const server = await buildServer();

    await server.listen({
      host: envVariables.APP_HOST,
      port: Number(envVariables.APP_PORT),
    });

    // Gracefully shutting down the server.
    SHUTDOWN_SIGNALS.forEach((signal) => {
      process.on(signal, async () => {
        try {
          server.log.warn("❌❌❌ Shutting down server ❌❌❌");
          await server.close();
          process.exit(0);
        } catch (error) {
          server.log.warn("❌❌❌ Shutting down server ❌❌❌");
          process.exit(1);
        }
      });
    });
  } catch (error) {
    console.log("❌❌❌ Shutting down server ❌❌❌");
    console.error({ ...(error as any) });
    process.exit(1);
  }
};

startServer();

import dotenv from "dotenv";
dotenv.config();

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import path from "path";
import { migrationClient } from "./database";

export const migrateDB = async () => {
  try {
    console.log("🔥🔥🔥🔥🔥 STARTING MIGRATION 🔥🔥🔥🔥🔥");
    await migrate(drizzle(migrationClient), {
      migrationsFolder: path.join(__dirname, "../db/migrations"),
    });
    console.log("🔥🔥🔥🔥🔥 MIGRATION COMPLETED 🔥🔥🔥🔥🔥");
  } catch (error) {
    console.log(error);
    console.log("ERROR WHILE MIGRATING DATABASE.");
  }
};

migrateDB();

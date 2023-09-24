import { envVariables } from "@/config/env";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// FOR MIGRATIONS
export const migrationClient = postgres(envVariables.DATABASE_URL, { max: 1 });

// FOR QUERY PURPOSE
const queryClient = postgres(envVariables.DATABASE_URL);
export const db: PostgresJsDatabase = drizzle(queryClient);

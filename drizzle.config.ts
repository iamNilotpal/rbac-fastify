import type { Config } from "drizzle-kit";

export default {
  driver: "pg",
  breakpoints: false,
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dbCredentials: { connectionString: process.env.DATABASE_URL! },
} satisfies Config;

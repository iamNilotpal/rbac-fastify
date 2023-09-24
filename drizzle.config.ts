import type { Config } from "drizzle-kit";

export default {
  driver: "pg",
  verbose: true,
  breakpoints: true,
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  introspect: { casing: "camel" },
  dbCredentials: { connectionString: process.env.DATABASE_URL! },
} satisfies Config;

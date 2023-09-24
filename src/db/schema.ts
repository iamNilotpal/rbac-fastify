import {
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const applications = pgTable("applications", {
  name: varchar("name", { length: 256 }).notNull(),
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  description: varchar("description", { length: 1024 }).notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const users = pgTable(
  "users",
  {
    id: uuid("id").unique("user_id_index").notNull().defaultRandom(),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    password: varchar("password", { length: 50 }).notNull(),
    applicationId: uuid("applicationId").references(() => applications.id),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
  },
  (users) => ({
    cpk: primaryKey(users.email, users.applicationId),
  })
);

export const roles = pgTable(
  "roles",
  {
    id: uuid("id").unique("role_id_index").notNull().defaultRandom(),
    name: varchar("name", { length: 256 }).notNull(),
    permissions: text("permissions").array().$type<Array<string>>(),
    description: varchar("description", { length: 1024 }).notNull(),
    applicationId: uuid("applicationId").references(() => applications.id),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
  },
  (roles) => ({
    cpk: primaryKey(roles.name, roles.applicationId),
  })
);

export const usersToRoles = pgTable(
  "usersToRoles",
  {
    applicationId: uuid("applicationId")
      .references(() => applications.id)
      .notNull(),
    roleId: uuid("roleId")
      .references(() => roles.id)
      .notNull(),
    userId: uuid("userId")
      .references(() => users.id)
      .notNull(),
  },
  (usersToRoles) => ({
    cpk: primaryKey(
      usersToRoles.userId,
      usersToRoles.applicationId,
      usersToRoles.roleId
    ),
  })
);

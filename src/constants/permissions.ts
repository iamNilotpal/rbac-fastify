import { Permissions } from "@/types/permissions";

export const ALL_PERMISSIONS = [
  // USERS PERMISSIONS
  "users:read",
  "users:update",
  "users:create",
  "users:delete",

  // ROLES PERMISSIONS
  "roles:read",
  "roles:update",
  "roles:create",
  "roles:delete",

  // APPLICATIONS PERMISSIONS
  "applications:read",
  "applications:update",
  "applications:create",
  "applications:delete",
] as const;

export const PERMISSIONS_CONFIG = ALL_PERMISSIONS.reduce((acc, permission) => {
  acc[permission] = permission;
  return acc;
}, {} as Record<Permissions, Permissions>);

export const USER_PERMISSIONS = [
  PERMISSIONS_CONFIG["users:read"],
  PERMISSIONS_CONFIG["users:create"],
  PERMISSIONS_CONFIG["users:delete"],
  PERMISSIONS_CONFIG["users:update"],
] as const;

export const APPLICATIONS_PERMISSIONS = [
  PERMISSIONS_CONFIG["applications:read"],
  PERMISSIONS_CONFIG["applications:update"],
  PERMISSIONS_CONFIG["applications:delete"],
  PERMISSIONS_CONFIG["applications:create"],
] as const;

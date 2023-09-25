import { PermissionType } from "@/types/permissions";

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

export const PERMISSIONS = ALL_PERMISSIONS.reduce((acc, permission) => {
  acc[permission] = permission;
  return acc;
}, {} as Record<PermissionType, PermissionType>);

export const USER_PERMISSIONS = [
  PERMISSIONS["users:read"],
  PERMISSIONS["users:create"],
  PERMISSIONS["users:delete"],
  PERMISSIONS["users:update"],
] as const;

export const APPLICATIONS_PERMISSIONS = [
  PERMISSIONS["applications:read"],
  PERMISSIONS["applications:update"],
  PERMISSIONS["applications:delete"],
  PERMISSIONS["applications:create"],
] as const;

export enum SYSTEM_ROLES {
  SUPER_ADMIN = "SUPER_ADMIN",
  APPLICATION_USER = "APPLICATION_USER",
}

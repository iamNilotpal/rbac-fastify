import { ALL_PERMISSIONS } from "@/constants/permissions";

export type Permissions = (typeof ALL_PERMISSIONS)[number];
export type ExtractRoles<TRoles> = TRoles extends `${infer R}:${string}`
  ? R
  : never;

export type ExtractPermissions<
  TRoles extends string,
  TRole extends ExtractRoles<TRoles>
> = TRoles extends `${TRole}:${infer S}` ? `${TRole}:${S}` : never;

// EXTRACTING ROLES FROM PermissionType
export type SuperAdminPermissions = Permissions;
export type UserPermissions = ExtractPermissions<Permissions, "users">;
export type ApplicationPermissions = ExtractPermissions<
  Permissions,
  "applications"
>;

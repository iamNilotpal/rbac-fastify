import { ALL_PERMISSIONS } from "@/constants/permissions";

export type PermissionType = (typeof ALL_PERMISSIONS)[number];
export type UsersRoleType = {
  [K in PermissionType extends `users:${string}`
    ? K
    : never]: K extends `users:${string}` ? K : never;
};

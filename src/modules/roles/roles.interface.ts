import { roles } from "@/db/schema";

export type RolePayload = typeof roles.$inferInsert;

export interface IRolesService {
  getRoles(limit: number, page: number): Promise<RolePayload[]>;
  create(payload: RolePayload): Promise<RolePayload | undefined>;
}

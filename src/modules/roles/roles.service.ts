import { roles } from "@/db/schema";
import { db } from "@/lib/database";
import { IRolesService, RolePayload } from "./roles.interface";

class RolesService implements IRolesService {
  async create(payload: RolePayload): Promise<RolePayload | undefined> {
    const createdRoles = await db.insert(roles).values(payload).returning();
    return createdRoles.at(0);
  }

  async getRoles(limit: number, page: number): Promise<RolePayload[]> {
    const internalLimit = limit && limit <= 10 ? limit : 10;
    const offset = internalLimit * page;
    return db
      .select({
        id: roles.id,
        name: roles.name,
        created_at: roles.created_at,
        updated_at: roles.updated_at,
        description: roles.description,
        permissions: roles.permissions,
        applicationId: roles.applicationId,
      })
      .from(roles)
      .limit(internalLimit)
      .offset(offset);
  }
}

export default RolesService;

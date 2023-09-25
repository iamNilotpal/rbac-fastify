import { ALL_PERMISSIONS, USER_PERMISSIONS } from "@/constants/permissions";
import { SYSTEM_ROLES } from "@/constants/roles";
import { FastifyReply, FastifyRequest } from "fastify";
import { IRolesService, RolePayload } from "./roles.interface";

class RolesController {
  constructor(private service: IRolesService) {}

  async createRole(
    req: FastifyRequest<{ Body: { type: SYSTEM_ROLES } & RolePayload }>,
    reply: FastifyReply
  ) {
    const payload = req.body;

    if (payload.type === SYSTEM_ROLES.SUPER_ADMIN) {
      const role = this.service.create({
        ...payload,
        name: SYSTEM_ROLES.SUPER_ADMIN,
        permissions: ALL_PERMISSIONS as unknown as string[],
      });
      return reply.code(201).send(role);
    }

    const role = this.service.create({
      ...payload,
      name: SYSTEM_ROLES.APPLICATION_USER,
      permissions: USER_PERMISSIONS as unknown as string[],
    });
    return reply.code(201).send(role);
  }
}

export default RolesController;

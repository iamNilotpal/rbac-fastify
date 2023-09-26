import { AppServerType } from "@/lib/server";
import RolesController from "./roles.controller";
import RolesService from "./roles.service";

export const rolesRoutes = async (fastify: AppServerType) => {
  const rolesService = new RolesService();
  const rolesController = new RolesController(rolesService);

  fastify.post("/", rolesController.createRole);
};

import { AppServerType } from "@/lib/server";
import RolesController from "./roles.controller";
import RolesService from "./roles.service";

let rolesService: RolesService;
let rolesController: RolesController;

export const rolesRoutes = async (fastify: AppServerType) => {
  if (!rolesService) rolesService = new RolesService();
  if (!rolesController) rolesController = new RolesController(rolesService);

  fastify.post("/", rolesController.createRole);
};

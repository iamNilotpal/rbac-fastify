import { AppServerType } from "@/lib/server";
import ApplicationsService from "./application.service";
import ApplicationsController from "./applications.controller";

let applicationService: ApplicationsService;
let applicationsController: ApplicationsController;

export const applicationRoutes = async (fastify: AppServerType) => {
  if (!applicationService) applicationService = new ApplicationsService();
  if (!applicationsController)
    applicationsController = new ApplicationsController(applicationService);

  fastify.get("/", applicationsController.getAllApplications);
  fastify.post("/", applicationsController.createApplication);
};

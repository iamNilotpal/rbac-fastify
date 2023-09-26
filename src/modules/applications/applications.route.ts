import { AppServerType } from "@/lib/server";
import ApplicationsService from "./application.service";
import ApplicationsController from "./applications.controller";

export const applicationRoutes = async (fastify: AppServerType) => {
  const applicationService = new ApplicationsService();
  const applicationsController = new ApplicationsController(applicationService);

  fastify.get("/", applicationsController.getAllApplications);
  fastify.post("/", applicationsController.createApplication);
};

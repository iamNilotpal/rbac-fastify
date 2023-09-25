import { AppServerType } from "@/lib/server";
import applicationsController from "./applications.controller";

export const applicationRoutes = async (fastify: AppServerType) => {
  fastify.get("/", applicationsController.getAllApplications);
  fastify.post("/", applicationsController.createApplication);
};

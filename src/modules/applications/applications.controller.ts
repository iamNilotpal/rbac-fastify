import { FastifyReply, FastifyRequest } from "fastify";
import applicationService from "./application.service";
import {
  ApplicationPayload,
  IApplicationsService,
} from "./applications.interface";

class ApplicationsController {
  constructor(private service: IApplicationsService) {}

  async getAllApplications(
    req: FastifyRequest<{ Params: { limit: number; page: number } }>,
    reply: FastifyReply
  ) {
    const { limit, page } = req.params;
    const applications = await this.service.getApplications(limit, page);
    return reply.code(200).send(applications);
  }

  async createApplication(
    req: FastifyRequest<{ Body: ApplicationPayload }>,
    reply: FastifyReply
  ) {
    const payload = req.body;
    const application = await this.service.create(payload);
    return reply.code(201).send(application);
  }
}

export default new ApplicationsController(applicationService);

import { applications } from "@/db/schema";

export type ApplicationPayload = typeof applications.$inferInsert;

export interface IApplicationsService {
  getApplications(limit: number, page: number): Promise<ApplicationPayload[]>;
  create(payload: ApplicationPayload): Promise<ApplicationPayload | undefined>;
}

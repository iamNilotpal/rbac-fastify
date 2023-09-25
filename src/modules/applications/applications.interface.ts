import { applications } from "@/db/schema";

export type ApplicationPayload = typeof applications.$inferInsert;

export interface IApplicationsService {
  create(payload: ApplicationPayload): Promise<ApplicationPayload | null>;
  getApplications(limit: number, page: number): Promise<ApplicationPayload[]>;
}

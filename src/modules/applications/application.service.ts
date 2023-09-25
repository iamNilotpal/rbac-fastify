import { applications } from "@/db/schema";
import { db } from "@/lib/database";
import {
  ApplicationPayload,
  IApplicationsService,
} from "./applications.interface";

class ApplicationsService implements IApplicationsService {
  async create(
    payload: ApplicationPayload
  ): Promise<ApplicationPayload | undefined> {
    const data = await db.insert(applications).values(payload).returning();
    return data.at(0);
  }

  async getApplications(
    limit: number,
    page: number
  ): Promise<ApplicationPayload[]> {
    const internalLimit = limit && limit <= 10 ? limit : 10;
    const offset = internalLimit * page;
    return db
      .select({
        id: applications.id,
        name: applications.name,
        created_at: applications.created_at,
        updated_at: applications.updated_at,
        description: applications.description,
      })
      .from(applications)
      .limit(internalLimit)
      .offset(offset);
  }
}

export default ApplicationsService;

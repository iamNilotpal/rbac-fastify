import { applications } from "@/db/schema";
import { db } from "@/lib/database";
import { InferInsertModel } from "drizzle-orm";
import { IApplicationsService } from "./applications.interface";

class ApplicationsService implements IApplicationsService {
  async create(payload: InferInsertModel<typeof applications>) {
    const data = await db.insert(applications).values(payload).returning();
    return data[0];
  }

  async getApplications(limit: number, page: number) {
    const internalLimit = limit && limit <= 10 ? limit : 10;
    const offset = internalLimit * page;

    const allApplications = await db
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

    return allApplications;
  }
}

export default new ApplicationsService();

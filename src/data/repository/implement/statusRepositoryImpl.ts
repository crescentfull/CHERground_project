import { injectable } from "inversify";
import { connection } from "../../connection/connection";
import { Status } from "../../entity/status";
import { StatusError } from "../../../service/error/error";
import { StatusRepository } from "..";

@injectable()
export default class StatusRepositoryImpl implements StatusRepository {
    async getStatus(id: string): Promise<Status> {
        const StatusRepo = (await connection).getRepository(Status);
        let status = await StatusRepo.findOne({where: {id:id}})

        if(status) {
            return status;
        } else {
            throw StatusError.UNEXISTING_STATUS;
        }
    }

    async updateStatus(status: Status): Promise<void> {
        const StatusRepo = (await connection).getRepository(Status);
        StatusRepo.save(status);
    }

    async saveStatus(status: Status): Promise<void> {
        const StatusRepo = (await connection).getRepository(Status);
        StatusRepo.save(status);
    }

    async deleteStatus(id: string): Promise<void> {
        const StatusRepo = (await connection).getRepository(Status);
        StatusRepo.delete(id);
    }
}
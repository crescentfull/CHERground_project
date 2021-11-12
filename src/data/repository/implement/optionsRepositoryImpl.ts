import { injectable } from "inversify";
import { Options } from "../../entity/options";
import { OptionsRepository } from "..";
import { connection } from "../../connection/connection";
import { OptionsError } from "../../../service/error/error";

@injectable()
export default class OptionsRepositoryImpl implements OptionsRepository {
    async getOptions(id: string): Promise<Options> {
        const optionsRepo = (await connection).getRepository(Options);
        let options = await optionsRepo.findOne({where: {id:id}})

        if(options) {
            return options;
        } else {
            throw OptionsError.UNEXISTING_OPTIONS;
        }
    }

    async updateOptions(options: Options): Promise<void> {
        const optionsRepo = (await connection).getRepository(Options);
        optionsRepo.save(options);
    }

    async saveOptions(options: Options): Promise<void> {
        const optionsRepo = (await connection).getRepository(Options);
        optionsRepo.save(options);
    }

    async deleteOptions(id: string): Promise<void> {
        const optionsRepo = (await connection).getRepository(Options);
        optionsRepo.delete(id);
    }
}
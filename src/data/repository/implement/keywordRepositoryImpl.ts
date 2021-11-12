import { injectable } from "inversify";
import { connection } from "../../connection/connection";
import { Keyword } from "../../entity/keyword";
import { KeywordError } from "../../../service/error/error";
import { KeywordRepository } from "..";

@injectable()
export default class KeywordRepositoryImpl implements KeywordRepository {
    async getKeyword(id: string): Promise<Keyword> {
        const keywordRepo = (await connection).getRepository(Keyword);
        let keyword = await keywordRepo.findOne({where: {id:id}})

        if(keyword) {
            return keyword;
        } else {
            throw KeywordError.UNEXISTING_KEYWORD;
        }
    }

    async updateKeyword(keyword: Keyword): Promise<void> {
        const keywordRepo = (await connection).getRepository(Keyword);
        keywordRepo.save(keyword);
    }

    async saveKeyword(keyword: Keyword): Promise<void> {
        const keywordRepo = (await connection).getRepository(Keyword);
        keywordRepo.save(keyword);
    }

    async deleteKeyword(id: string): Promise<void> {
        const keywordRepo = (await connection).getRepository(Keyword);
        keywordRepo.delete(id);
    }
}
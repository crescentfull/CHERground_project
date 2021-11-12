import { inject, injectable } from "inversify";
import { KeywordService } from "..";
import { KeywordDto } from "../../api/dto";
import { KeywordMapper } from "../../data/mapper/modelMapper";
import { KeywordRepository } from "../../data/repository";

@injectable()
export default class KeywordServiceImpl implements KeywordService {
    private keywordRepository: KeywordRepository;
    private keywordMapper: KeywordMapper;

    constructor (
        @inject('KeywordRepository') keywordRepository: KeywordRepository,
        @inject('KeywordMapper') keywordMapper: KeywordMapper
    ) {
        this.keywordRepository = keywordRepository;
        this.keywordMapper = keywordMapper;
    }

    async getKeyword(id: string): Promise<KeywordDto> {
        try {
            let keyword = await this.keywordRepository.getKeyword(id);
            return this.keywordMapper.convert(keyword);
        } catch (err) {
            throw err;
        }
    }

    async saveKeyword(keyword: KeywordDto): Promise<string> {
        let keywordInfo = this.keywordMapper.revert(keyword);
        await this.keywordRepository.saveKeyword(keywordInfo)
        return "successfully saved";
    }

    async updateKeyword(keyword: KeywordDto): Promise<string> {
        let keywordInfo = this.keywordMapper.revert(keyword);
        await this.keywordRepository.updateKeyword(keywordInfo)
        return "successfully updated";
    }

    async deleteKeyword(id: string): Promise<string> {
        await this.keywordRepository.deleteKeyword(id)
        return "successfully deleted"
    }
}
import { inject, injectable } from "inversify";
import { OptionsService } from "..";
import { OptionsDto } from "../../api/dto";
import { OptionsMapper } from "../../data/mapper/modelMapper";
import { OptionsRepository } from "../../data/repository";

@injectable()
export default class OptionsServiceImpl implements OptionsService {
    private optionsRepository: OptionsRepository;
    private optionsMapper: OptionsMapper;

    constructor (
        @inject('OptionsRepository') optionsRepository: OptionsRepository,
        @inject('OptionsMapper') optionsMapper: OptionsMapper
    ) {
        this.optionsRepository = optionsRepository;
        this.optionsMapper = optionsMapper;
    }

    async getOptions(id: string): Promise<OptionsDto> {
        try {
            let options = await this.optionsRepository.getOptions(id);
            return this.optionsMapper.convert(options);
        } catch (err) {
            throw err;
        }
    }

    async saveOptions(options: OptionsDto): Promise<string> {
        let optionsInfo = this.optionsMapper.revert(options);
        await this.optionsRepository.saveOptions(optionsInfo);
        return "successfully saved";
    }

    async updateOptions(options: OptionsDto): Promise<string> {
        let optionsInfo = this.optionsMapper.revert(options);
        await this.optionsRepository.updateOptions(optionsInfo);
        return "successfully updated";
    }

    async deleteOptions(id: string): Promise<string> {
        await this.optionsRepository.deleteOptions(id);
        return "successfully deleted";
    }
}
import { inject, injectable } from "inversify";
import { StatusService } from "..";
import { StatusDto } from "../../api/dto";
import { StatusMapper } from "../../data/mapper/modelMapper";
import { StatusRepository } from "../../data/repository";

@injectable()
export default class StatusServiceImpl implements StatusService {
    private statusRepository: StatusRepository;
    private statusMapper: StatusMapper;

    constructor (
        @inject('StatusRepository') statusRepository: StatusRepository,
        @inject('StatusMapper') statusMapper: StatusMapper
    ) {
        this.statusRepository = statusRepository;
        this.statusMapper = statusMapper;
    }

    async getStatus(id: string): Promise<StatusDto> {
        try {
            let status = await this.statusRepository.getStatus(id);
            return this.statusMapper.convert(status);
        } catch (err) {
            throw err;
        }
    }

    async saveStatus(status: StatusDto): Promise<string> {
        let statusInfo = this.statusMapper.revert(status);
        await this.statusRepository.saveStatus(statusInfo)
        return "successfully saved";
    }

    async updateStatus(status: StatusDto): Promise<string> {
        let statusInfo = this.statusMapper.revert(status);
        await this.statusRepository.updateStatus(statusInfo)
        return "successfully updated";
    }

    async deleteStatus(id: string): Promise<string> {
        await this.statusRepository.deleteStatus(id)
        return "successfully deleted"
    }
}
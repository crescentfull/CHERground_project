import { inject, injectable } from "inversify";
import { ImageDto } from "../../api/dto";
import { ImageMapper } from "../../data/mapper/modelMapper";
import { ImageRepository } from "../../data/repository";
import { ImageService } from "..";

@injectable()
export default class ImageServiceImpl implements ImageService {
    private imageRepository: ImageRepository;
    private imageMapper: ImageMapper;

    constructor (
        @inject('ImageRepository') imageRepository: ImageRepository,
        @inject('ImageMapper') imageMapper: ImageMapper
    ) {
        this.imageRepository = imageRepository;
        this.imageMapper = imageMapper;
    }

    async getImage(id: string): Promise<ImageDto> {
        try {
            let image = await this.imageRepository.getImage(id);
            return this.imageMapper.convert(image);
        } catch (err) {
            throw err;
        }
    }

    async saveImage(image: ImageDto): Promise<string> {
        let imageInfo = this.imageMapper.revert(image);
        await this.imageRepository.saveImage(imageInfo)
        return "successfully saved";
    }

    async updateImage(image: ImageDto): Promise<string> {
        let imageInfo = this.imageMapper.revert(image);
        await this.imageRepository.updateImage(imageInfo)
        return "successfully updated";
    }

    async deleteImage(id: string): Promise<string> {
        await this.imageRepository.deleteImage(id)
        return "successfully deleted"
    }
}
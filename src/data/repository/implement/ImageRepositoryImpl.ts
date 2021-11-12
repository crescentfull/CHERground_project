import { injectable } from "inversify";
import { connection } from "../../connection/connection";
import { Image } from "../../entity/image";
import { ImageError } from "../../../service/error/error";
import { ImageRepository } from "..";

@injectable()
export default class ImageRepositoryImpl implements ImageRepository {
    async getImage(id: string): Promise<Image> {
        const imageRepo = (await connection).getRepository(Image);
        let image = await imageRepo.findOne({where: {id:id}})

        if(image) {
            return image;
        } else {
            throw ImageError.UNEXISTING_IMGAE;
        }
    }

    async updateImage(image: Image): Promise<void> {
        const imageRepo = (await connection).getRepository(Image);
        imageRepo.save(image);
    }

    async saveImage(image: Image): Promise<void> {
        const imageRepo = (await connection).getRepository(Image);
        imageRepo.save(image);
    }

    async deleteImage(id: string): Promise<void> {
        const imageRepo = (await connection).getRepository(Image);
        imageRepo.delete(id);
    }
}
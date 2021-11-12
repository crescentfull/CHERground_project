import { injectable } from "inversify";
import { CartMapper } from "../modelMapper";
import { CartDto } from "../../../api/dto/index";
import { Cart } from "../../entity/cart";

@injectable()
export default class CartMapperImpl implements CartMapper {
    convert (entity: Cart): CartDto {
        let dto = new CartDto();

        dto.id = entity.id;
        dto.quantity = entity.quantity;
        dto.user = entity.user;
        dto.product = entity.product;

        return dto;
    }

    revert(dto: CartDto): Cart {
        let entity = new Cart();

        entity.id = dto.id;
        entity.quantity = dto.quantity;
        entity.user = dto.user;
        entity.product = dto.product;
        
        return entity;
    }
}
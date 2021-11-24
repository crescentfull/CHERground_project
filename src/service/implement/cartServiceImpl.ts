import { inject, injectable } from "inversify";
import { CartDto } from "../../api/dto";
import { CartMapper } from "../../data/mapper/modelMapper";
import { CartRepository } from "../../data/repository";
import { CartService } from "..";
import { User } from "src/data/entity/user";

@injectable()
export default class CartServiceImpl implements CartService {
    private cartRepository: CartRepository;
    private cartMapper: CartMapper;

    constructor (
        @inject('CartRepository') cartRepository: CartRepository,
        @inject('CartMapper') cartMapper: CartMapper
    ) {
        this.cartRepository = cartRepository;
        this.cartMapper = cartMapper;
    }

    async getCart(id: string, userId: string): Promise<CartDto> {
        try {
            let cart = await this.cartRepository.getUserCartDetail(id, userId);
            return this.cartMapper.convert(cart);
        } catch (err) {
            throw err;
        }
    }

    async getUserCart(user: string): Promise<CartDto[]> {
        try {
            let carts = await this.cartRepository.getUserCart(user);
            let result = [];
            for (var cart of carts) {
                let value = this.cartMapper.convert(cart);
                result.push(value);
            }
            return result;
        } catch (err) {
            throw err;
        }
    }

    async saveCart(cart: CartDto, userId: User): Promise<string> {
        let cartInfo = this.cartMapper.revert(cart);
        await this.cartRepository.saveCart(cartInfo, userId);
        return "successfully saved";
    }

    async updateCart(quantity: CartDto): Promise<string> {
        let updateInfo = this.cartMapper.revert(quantity);
        await this.cartRepository.updateCart(updateInfo);
        return "successfully updated";
    }

    async deleteCart(id: string): Promise<string> {
        try {
            await this.cartRepository.deleteCart(id);
            return "successfully deleted"
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    async deleteOneCart(cartId: string): Promise<string> {
        await this.cartRepository.deleteOneCart(cartId);
        return "successfully deleted";
    }
}
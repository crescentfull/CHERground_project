import { inject, injectable } from "inversify";

import { CartService } from "..";
import { CartDto } from "src/api/dto";
import { CartMapper } from "src/data/mapper/modelMapper";
import { CartRepository } from "src/data/repository";

@injectable()
export default class CartServiceImpl implements CartService {
    private cartRepository: CartRepository;
    private cartMapper: CartMapper;

    constructor (
        @inject('CartRepository') cartRepository: CartRepository,
        @inject('CartMapper') cartMapper: CartMapper
    ) {
        this.cartMapper = cartMapper;
        this.cartRepository = cartRepository;
    }

    async getCart(id: string): Promise<CartDto> {
        try {
            let cart = await this.cartRepository.getCart(id);
            return this.cartMapper.convert(cart);
        } catch (err) {
            throw err;
        }
    }

    async saveCart(cart: CartDto): Promise<string> {
        let cartInfo = this.cartMapper.revert(cart);
        await this.cartRepository.saveCart(cartInfo);
        return "successfully saved";
    }

    async updateCart(cart: CartDto): Promise<string> {
        let cartInfo = this.cartMapper.revert(cart);
        await this.cartRepository.updateCart(cartInfo);
        return "successfully updated";
    }

    async deleteCart(id: string): Promise<string> {
        await this.cartRepository.deleteCart(id);
        return "successfully deleted";
    }
}
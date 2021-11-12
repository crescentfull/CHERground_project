import { inject, injectable } from "inversify";
import { CartDto } from "../../api/dto";
import { CartMapper } from "../../data/mapper/modelMapper";
import { CartRepository } from "../../data/repository";
import { CartService } from "..";

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
        await this.cartRepository.saveCart(cartInfo)
        return "successfully saved";
    }

    async updateCart(cart: CartDto): Promise<string> {
        let cartInfo = this.cartMapper.revert(cart);
        await this.cartRepository.updateCart(cartInfo)
        return "successfully updated";
    }

    async deleteCart(id: string): Promise<string> {
        await this.cartRepository.deleteCart(id)
        return "successfully deleted"
    }
}
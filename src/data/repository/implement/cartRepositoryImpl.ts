import { injectable } from "inversify";
import { connection } from "../../connection/connection";
import { CartRepository } from "..";
import { Cart } from "src/data/entity/cart";
import { CartError } from "src/service/error/error";

@injectable()
export default class CartRepositoryImpl implements CartRepository {
    async getCart(id: string): Promise<Cart> {
        const cartRepo = (await connection).getRepository(Cart);
        let cart = await cartRepo.findOne({where: {id:id}});
        
        if(cart) {
            return cart;
        } else {
            throw CartError.UNEXISTING_CART;
        }
    }

    async saveCart(cart: Cart): Promise<void> {
        const cartRepo = (await connection).getRepository(Cart);
        cartRepo.save(cart)
    }

    async updateCart(cart: Cart): Promise<void> {
        const cartRepo = (await connection).getRepository(Cart);
        cartRepo.save(cart)
    }

    async deleteCart(id: string): Promise<void> {
        const cartRepo = (await connection).getRepository(Cart);
        cartRepo.delete(id);
    }
}
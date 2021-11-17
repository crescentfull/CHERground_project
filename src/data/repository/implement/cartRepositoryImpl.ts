import { injectable } from "inversify";
import { connection } from "../../connection/connection";
import { CartRepository } from "..";
import { Cart } from "../../entity/cart";
import { CartError } from "../../../service/error/error";
import { User } from "src/data/entity/user";

@injectable()
export default class CartRepositoryImpl implements CartRepository {
    async getUserCartDetail(id: string, userId: string): Promise<Cart> {
        const cartRepo = (await connection).getRepository(Cart);
        let cart = await cartRepo.findOne({
            where: {
                id:Number(id), user:Number(userId)
            },
            join: {
                alias: "cart",
                leftJoinAndSelect: {
                    product: "cart.product",
                    image: "product.image"
                }
            }
        });
        
        if(cart) {
            return cart;
        } else {
            throw CartError.UNEXISTING_CART;
        }
    }

    async getUserCart(userId: string): Promise<Cart[]> {
        const cartRepo = (await connection).getRepository(Cart);
        let userCart = await cartRepo.find({
            where: {
                user:Number(userId)
            },
            join: {
                alias: "cart",
                leftJoinAndSelect: {
                    product: "cart.product",
                    image: "product.image"
                }
            }
        });
        if(userCart) {
            return userCart;
        } else {
            throw CartError.UNEXISTING_CART;
        }
    }

    async saveCart(cart: Cart, userId: User): Promise<void> {
        const cartRepo = (await connection).getRepository(Cart);
        cart.user = userId;
        cartRepo.save(cart)
    }

    async updateCart(quantity: Cart): Promise<void> {
        const cartRepo = (await connection).getRepository(Cart);
        cartRepo.save(quantity);
    }

    async deleteCart(id: string): Promise<void> {
        const cartRepo = (await connection).getRepository(Cart);
        let cartIds = []
        let userCarts = await cartRepo.find({
            where: {
                user:Number(id)
            }
        });

        for (var cart of userCarts) {
            cartIds.push(cart.id);
        }
        
        cartRepo.delete(cartIds);
    }

    async deleteOneCart(cartId: string): Promise<void> {
        const cartRepo = (await connection).getRepository(Cart);
        cartRepo.delete(cartId);
    }
}
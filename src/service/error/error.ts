export enum ErrorType {
    TYPE_USER = 0x01 << 8,
    TYPE_PRODUCT = 0x01 << 8,
    TYPE_IMAGE = 0x01 << 8,
    TYPE_CART = 0x01 << 8,
    TYPE_CATEGORY = 0x01 << 8,
    TYPE_OPTIONS = 0x01 << 8,
    TYPE_KEYWORD = 0x01 << 8,
    TYPE_STATUS = 0x01 << 8,
    TYPE_SYSTEM = 0xff << 8
}
export class CustomError extends Error {
    status: number;
    code: number;

    constructor (status: number, code: number, message: string) {
        super();
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
export class UserError {
    static UNEXISTING_USER = new CustomError(404, ErrorType.TYPE_USER, "USER_DOSEN'T_EXIST")
}
export class ProductError {
    static UNEXISTING_PRODUCT = new CustomError(404, ErrorType.TYPE_PRODUCT, "PRODUCT_DOESN'T_EXIST")
}
export class ImageError {
    static UNEXISTING_IMGAE = new CustomError(404, ErrorType.TYPE_IMAGE, "IMGAE_DOSEN'T_EXIT")
}
export class CartError {
    static UNEXISTING_CART = new CustomError(404, ErrorType.TYPE_CART, "CART_DOSEN'T_EXIST")
}
export class CategoryError {
    static UNEXISTING_CATEGORY = new CustomError(404, ErrorType.TYPE_CATEGORY, "CATEOGRY_DOSEN'T_EXIT")
}
export class OptionsError {
    static UNEXISTING_OPTIONS = new CustomError(404, ErrorType.TYPE_OPTIONS, "OPTION_DOSEN'T_EXIT")
}
export class KeywordError {
    static UNEXISTING_KEYWORD = new CustomError(404, ErrorType.TYPE_KEYWORD, "KEYWORD_DOSEN'T_EXIT")
}
export class StatusError {
    static UNEXISTING_STATUS = new CustomError(404, ErrorType.TYPE_STATUS, "STATUS_DOSEN'T_EXIT")
}
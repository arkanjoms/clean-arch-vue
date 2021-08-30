import User from "./User";
import CartItem from "@/domain/CartItem";
import Coupon from "@/domain/Coupon";

export default class Cart {
    _user: User | null;
    _items: CartItem[];
    _coupon: Coupon | null;

    constructor() {
        this._user = null;
        this._items = [];
        this._coupon = null;
    }

    addItem(item: CartItem) {
        this._items.push(item);
    }

    removeItem(cartItem: CartItem) {
        this._items = this._items.filter(it => it !== cartItem);
    }

    addCoupon(coupon: Coupon) {
        this._coupon = coupon;
    }

    proceed() {
        console.log('proceed')
    }
}

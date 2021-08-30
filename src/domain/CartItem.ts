import Item from '@/domain/Item';

export default class CartItem {
    _item = {};
    _amount = 1;

    constructor(item: Item, amount: number = 1) {
        this._item = item;
        this._amount = amount;
    }
}

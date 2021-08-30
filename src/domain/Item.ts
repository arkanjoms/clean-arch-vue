export default class Item {
    _description: string;
    _category: string;
    _price: number;

    constructor(description: string, category: string, price: number) {
        this._description = description;
        this._category = category;
        this._price = price;
    }

    get description(): string {
        return this._description;
    }

    get category(): string {
        return this._category;
    }

    get price(): number {
        return this._price;
    }
}

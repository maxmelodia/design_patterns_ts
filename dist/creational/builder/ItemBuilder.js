"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class ItemBuilder {
    constructor(idItem, category, description, price) {
        this.idItem = idItem;
        this.category = category;
        this.description = description;
        this.price = price;
    }
    setWidth(width) {
        this.width = width;
        return this;
    }
    setHeight(height) {
        this.height = height;
        return this;
    }
    setLength(length) {
        this.length = length;
        return this;
    }
    setWeight(weight) {
        this.weight = weight;
        return this;
    }
    build() {
        const item = new Item_1.default(this);
        return item;
    }
}
exports.default = ItemBuilder;

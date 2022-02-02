"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    //estratégia de "parametros nomeados"
    constructor({ idItem, category, description, width, height, length, weight }) {
        this.idItem = idItem;
        this.category = category;
        this.description = description;
        this.width = width;
        this.height = height;
        this.length = length;
        this.weight = weight;
    }
    getVolume() {
        return this.width / 100 * this.height / 100 * this.length / 100;
    }
    getDensity() {
        return this.weight / this.getVolume();
    }
}
exports.default = Item;

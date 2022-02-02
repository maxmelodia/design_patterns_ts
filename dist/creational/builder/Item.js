"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(itemBuilder) {
        this.idItem = itemBuilder.idItem;
        this.category = itemBuilder.category;
        this.description = itemBuilder.description;
        this.width = itemBuilder.width;
        this.height = itemBuilder.height;
        this.length = itemBuilder.length;
        this.weight = itemBuilder.weight;
    }
    getVolume() {
        if (!this.width || !this.height || !this.length)
            return 0;
        return this.width / 100 * this.height / 100 * this.length / 100;
    }
    getDensity() {
        if (!this.width || !this.height || !this.length || !this.weight)
            return 0;
        return this.weight / this.getVolume();
    }
}
exports.default = Item;

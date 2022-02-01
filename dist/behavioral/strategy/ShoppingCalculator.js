"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShoppingCalculator {
    constructor() {
        this.baseRate = 10;
        this.basePeriod = 3;
        this.hourlyRate = 3;
    }
    calculate(period) {
        let price = this.baseRate;
        const remainingHours = period.getDiffInHours() - this.basePeriod;
        if (remainingHours > 0)
            price += remainingHours * this.hourlyRate;
        return price;
    }
}
exports.default = ShoppingCalculator;

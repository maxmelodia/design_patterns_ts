"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AirportCalculator {
    constructor() {
        this.dailyRate = 50;
    }
    calculate(period) {
        return this.dailyRate * period.getDiffInDays();
    }
}
exports.default = AirportCalculator;

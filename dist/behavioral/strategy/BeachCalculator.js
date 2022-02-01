"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BeachCalculator {
    constructor() {
        this.hourlyRate = 5;
    }
    calculate(period) {
        return this.hourlyRate * period.getDiffInHours();
    }
}
exports.default = BeachCalculator;

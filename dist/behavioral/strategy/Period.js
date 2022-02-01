"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Period {
    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
    getDiffInMilli() {
        return this.endDate.getTime() - this.startDate.getTime();
    }
    getDiffInHours() {
        return ((this.getDiffInMilli()) / (1000 * 60 * 60));
    }
    getDiffInDays() {
        return ((this.getDiffInMilli()) / (1000 * 60 * 60 * 24));
    }
}
exports.default = Period;

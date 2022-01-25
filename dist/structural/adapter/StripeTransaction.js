"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StripeTransaction {
    constructor(code, grossAmount, situation) {
        this.code = code;
        this.grossAmount = grossAmount;
        this.situation = situation;
    }
    ;
}
exports.default = StripeTransaction;

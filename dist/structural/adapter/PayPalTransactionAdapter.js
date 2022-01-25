"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PayPalTransactionAdapter {
    constructor(paypalTransaction) {
        this.trackNumber = `${paypalTransaction.id}`;
        this.amount = paypalTransaction.amount;
        this.status = this.convertStatus(paypalTransaction.status);
    }
    ;
    convertStatus(status) {
        switch (status) {
            case "P":
                return "waiting_payment";
            case "S":
                return "paid";
            case "F":
                return "refunded";
            default:
                return "";
        }
    }
    ;
}
exports.default = PayPalTransactionAdapter;

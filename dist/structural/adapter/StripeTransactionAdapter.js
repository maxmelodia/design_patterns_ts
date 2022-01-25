"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StripeTransactionAdapter {
    constructor(stripeTransaction) {
        this.trackNumber = stripeTransaction.code;
        this.amount = stripeTransaction.grossAmount;
        this.status = this.convertStatus(stripeTransaction.situation);
    }
    convertStatus(situation) {
        switch (situation) {
            case 1:
                return "waiting_payment";
            case 2:
                return "paid";
            case 3:
                return "cancelled";
            default:
                return "";
        }
    }
    ;
}
exports.default = StripeTransactionAdapter;
;

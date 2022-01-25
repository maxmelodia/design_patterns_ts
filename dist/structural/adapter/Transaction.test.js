"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PayPalTransaction_1 = __importDefault(require("./PayPalTransaction"));
const PayPalTransactionAdapter_1 = __importDefault(require("./PayPalTransactionAdapter"));
const StripeTransaction_1 = __importDefault(require("./StripeTransaction"));
const StripeTransactionAdapter_1 = __importDefault(require("./StripeTransactionAdapter"));
test("Deve criar uma transação Stripe", function () {
    const stripeTransaction = new StripeTransaction_1.default("ASSSRE12331134", 1000, 2);
    expect(stripeTransaction.code).toBe("ASSSRE12331134");
});
test("Deve criar uma transação PayPal", function () {
    const paypalTransaction = new PayPalTransaction_1.default(123456, 1000, "S");
    expect(paypalTransaction.id).toBe(123456);
});
test("Deve criar uma transação a partir do Stripe", function () {
    const stripeTransaction = new StripeTransaction_1.default("AHN765NHD89", 1000, 2);
    const transaction = new StripeTransactionAdapter_1.default(stripeTransaction);
    expect(transaction.trackNumber).toBe("AHN765NHD89");
    expect(transaction.amount).toBe(1000);
    expect(transaction.status).toBe("paid");
});
test("Deve criar uma transação a partir do PayPal", function () {
    const paypalTransaction = new PayPalTransaction_1.default(7897897, 1000, "S");
    const transaction = new PayPalTransactionAdapter_1.default(paypalTransaction);
    expect(transaction.trackNumber).toBe("7897897");
    expect(transaction.amount).toBe(1000);
    expect(transaction.status).toBe("paid");
});

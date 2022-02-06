"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = __importDefault(require("./Transaction"));
class Account {
    constructor() {
        this.transactions = [];
    }
    credit(amount) {
        const transaction = new Transaction_1.default("credit", amount);
        this.transactions.push(transaction);
    }
    debit(amount) {
        const transaction = new Transaction_1.default("debit", amount);
        this.transactions.push(transaction);
    }
    getBalance() {
        let balance = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === "credit")
                balance += transaction.amount;
            if (transaction.type === "debit")
                balance -= transaction.amount;
        }
        return balance;
    }
}
exports.default = Account;

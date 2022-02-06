"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreditCommand {
    constructor(account, amount) {
        this.account = account;
        this.amount = amount;
    }
    execute() {
        this.account.credit(this.amount);
    }
}
exports.default = CreditCommand;

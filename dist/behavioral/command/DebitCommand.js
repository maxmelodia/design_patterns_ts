"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DebitCommand {
    constructor(account, amount) {
        this.account = account;
        this.amount = amount;
    }
    execute() {
        this.account.debit(this.amount);
    }
}
exports.default = DebitCommand;

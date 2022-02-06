"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./Account"));
const CreditCommand_1 = __importDefault(require("./CreditCommand"));
const DebitCommand_1 = __importDefault(require("./DebitCommand"));
test("Deve criar uma conta", function () {
    const account = new Account_1.default();
    const balance = account.getBalance();
    expect(balance).toBe(0);
});
test("Deve creditar uma conta", function () {
    const account = new Account_1.default();
    account.credit(100);
    const balance = account.getBalance();
    expect(balance).toBe(100);
});
test("Deve debitar uma conta", function () {
    const account = new Account_1.default();
    account.credit(100);
    account.debit(50);
    const balance = account.getBalance();
    expect(balance).toBe(50);
});
test("Deve creditar uma conta usando um comando", function () {
    const account = new Account_1.default();
    const creditCommand = new CreditCommand_1.default(account, 100);
    creditCommand.execute();
    const balance = account.getBalance();
    expect(balance).toBe(100);
});
test("Deve debitar uma conta usando um comando", function () {
    const account = new Account_1.default();
    const creditCommand = new CreditCommand_1.default(account, 100);
    const debitCommand = new DebitCommand_1.default(account, 50);
    creditCommand.execute();
    debitCommand.execute();
    const balance = account.getBalance();
    expect(balance).toBe(50);
});

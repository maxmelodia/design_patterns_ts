"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Atm_1 = __importDefault(require("./Atm"));
const BillHandler_1 = __importDefault(require("./BillHandler"));
test("Deve sacar dinheiro", function () {
    const handler1 = new BillHandler_1.default(undefined, 1);
    const handler2 = new BillHandler_1.default(handler1, 2);
    const handler5 = new BillHandler_1.default(handler2, 5);
    const handler10 = new BillHandler_1.default(handler5, 10);
    const handler20 = new BillHandler_1.default(handler10, 20);
    const handler50 = new BillHandler_1.default(handler20, 50);
    const handler100 = new BillHandler_1.default(handler50, 100);
    const atm = new Atm_1.default(handler100);
    const bills = atm.withdraw(978);
    expect(bills).toStrictEqual([
        { type: 100, quantity: 9 },
        { type: 50, quantity: 1 },
        { type: 20, quantity: 1 },
        { type: 10, quantity: 0 },
        { type: 5, quantity: 1 },
        { type: 2, quantity: 1 },
        { type: 1, quantity: 1 },
    ]);
});
test("Deve sacar dinheiro apenas com notas de 1", function () {
    const handler1 = new BillHandler_1.default(undefined, 1);
    const atm = new Atm_1.default(handler1);
    const bills = atm.withdraw(978);
    expect(bills).toStrictEqual([
        { type: 1, quantity: 978 },
    ]);
});
test("Deve sacar dinheiro apenas com notas de 5 e 10", function () {
    const handler5 = new BillHandler_1.default(undefined, 5);
    const handler10 = new BillHandler_1.default(handler5, 10);
    const atm = new Atm_1.default(handler10);
    const bills = atm.withdraw(500);
    expect(bills).toStrictEqual([
        { type: 10, quantity: 50 },
        { type: 5, quantity: 0 },
    ]);
});

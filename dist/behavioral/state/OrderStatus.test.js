"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(require("./Order"));
test("Deve criar um pedido com status pendente", function () {
    const order = new Order_1.default();
    expect(order.status.value).toBe("pending");
});
test("Deve mudar o status do pedido para confirmado", function () {
    const order = new Order_1.default();
    order.confirm();
    expect(order.status.value).toBe("confirmed");
});
test("Deve mudar o status do pedido para cancelado", function () {
    const order = new Order_1.default();
    order.cancel();
    expect(order.status.value).toBe("cancelled");
});
test("Se o pedido estiver cancelado, não pode mudar o status para confirmado", function () {
    const order = new Order_1.default();
    order.cancel();
    expect(() => order.confirm()).toThrow(new Error("O pedido já está cancelado"));
});

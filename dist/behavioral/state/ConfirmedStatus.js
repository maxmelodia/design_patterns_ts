"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CancelledStatus_1 = __importDefault(require("./CancelledStatus"));
const OrderStatus_1 = __importDefault(require("./OrderStatus"));
class ConfirmedStatus extends OrderStatus_1.default {
    constructor(order) {
        super(order);
        this.value = "confirmed";
    }
    confirm() {
        throw new Error("O pedido já está confirmado");
    }
    cancel() {
        this.order.status = new CancelledStatus_1.default(this.order);
    }
}
exports.default = ConfirmedStatus;

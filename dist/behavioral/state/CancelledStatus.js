"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderStatus_1 = __importDefault(require("./OrderStatus"));
class CancelledStatus extends OrderStatus_1.default {
    constructor(order) {
        super(order);
        this.value = "cancelled";
    }
    confirm() {
        throw new Error("O pedido já está cancelado");
    }
    cancel() {
        throw new Error("O pedido já está cancelado");
    }
}
exports.default = CancelledStatus;

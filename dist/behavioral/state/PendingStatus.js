"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CancelledStatus_1 = __importDefault(require("./CancelledStatus"));
const ConfirmedStatus_1 = __importDefault(require("./ConfirmedStatus"));
const OrderStatus_1 = __importDefault(require("./OrderStatus"));
class PendingStatus extends OrderStatus_1.default {
    constructor(order) {
        super(order);
        this.value = "pending";
    }
    confirm() {
        this.order.status = new ConfirmedStatus_1.default(this.order);
    }
    cancel() {
        this.order.status = new CancelledStatus_1.default(this.order);
    }
}
exports.default = PendingStatus;

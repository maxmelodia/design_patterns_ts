"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PendingStatus_1 = __importDefault(require("./PendingStatus"));
class Order {
    constructor() {
        this.status = new PendingStatus_1.default(this);
    }
    confirm() {
        this.status.confirm();
    }
    cancel() {
        this.status.cancel();
    }
}
exports.default = Order;

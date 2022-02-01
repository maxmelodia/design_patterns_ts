"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AirportCalculator_1 = __importDefault(require("./AirportCalculator"));
const BeachCalculator_1 = __importDefault(require("./BeachCalculator"));
const ShoppingCalculator_1 = __importDefault(require("./ShoppingCalculator"));
class TicketCalculatorFactory {
    static create(location) {
        switch (location) {
            case "beach": {
                return new BeachCalculator_1.default();
            }
            case "shopping": {
                return new ShoppingCalculator_1.default();
            }
            case "airport": {
                return new AirportCalculator_1.default();
            }
        }
        throw new Error("Ticket Calculator not found");
    }
}
exports.default = TicketCalculatorFactory;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerUseCaseDecorator_1 = __importDefault(require("./LoggerUseCaseDecorator"));
const PerformanceUseCaseDecorator_1 = __importDefault(require("./PerformanceUseCaseDecorator"));
const PlaceOrder_1 = __importDefault(require("./PlaceOrder"));
const SimulateFreight_1 = __importDefault(require("./SimulateFreight"));
test("Deve logar as operações realizadas em um caso de uso", function () {
    const input = {
        cpf: "123.456.789-10",
        items: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 3 },
        ]
    };
    const placeOrder = new LoggerUseCaseDecorator_1.default(new PerformanceUseCaseDecorator_1.default(new PlaceOrder_1.default()));
    placeOrder.execute(input);
    const simulateFreight = new LoggerUseCaseDecorator_1.default(new PerformanceUseCaseDecorator_1.default(new SimulateFreight_1.default()));
    simulateFreight.execute(input);
});

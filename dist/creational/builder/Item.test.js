"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemBuilder_1 = __importDefault(require("./ItemBuilder"));
test("Deve criar um item", function () {
    const item = new ItemBuilder_1.default(1, "Instrumentos Musicais", "Guitarra", 1000)
        .setWidth(100)
        .setHeight(50)
        .setLength(30)
        .setWeight(3)
        .build();
    const volume = item.getVolume();
    expect(volume).toBe(0.15);
});

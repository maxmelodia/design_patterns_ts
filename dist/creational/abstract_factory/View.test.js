"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DarkThemeFactory_1 = __importDefault(require("./DarkThemeFactory"));
const LigthThemeFactory_1 = __importDefault(require("./LigthThemeFactory"));
const View_1 = __importDefault(require("./View"));
test("Deve criar uma view tema claro", function () {
    const view = new View_1.default(new LigthThemeFactory_1.default());
    expect(view.label.color).toBe("black");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("blue");
});
test("Deve criar uma view tema claro", function () {
    const view = new View_1.default(new DarkThemeFactory_1.default());
    expect(view.label.color).toBe("white");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("black");
});

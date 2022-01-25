"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LigthButton_1 = __importDefault(require("./LigthButton"));
const LigthLabel_1 = __importDefault(require("./LigthLabel"));
class LigthThemeFactory {
    createLabel() {
        return new LigthLabel_1.default();
    }
    createButton() {
        return new LigthButton_1.default();
    }
}
exports.default = LigthThemeFactory;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = __importDefault(require("./Observable"));
class InputText extends Observable_1.default {
    constructor(name) {
        super();
        this.name = name;
        this.value = "";
    }
    setValue(value) {
        this.value = value;
        this.notifyAll(this.name, this.value);
    }
}
exports.default = InputText;

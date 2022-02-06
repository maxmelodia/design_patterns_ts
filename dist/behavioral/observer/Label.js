"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Label {
    constructor(expression) {
        this.expression = expression;
        this.value = "";
    }
    notify(name, value) {
        this.value = this.expression.replace(`{{${name}}}`, value);
    }
}
exports.default = Label;

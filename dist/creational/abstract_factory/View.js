"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor(abstractWidgetFactory) {
        this.label = abstractWidgetFactory.createLabel();
        this.button = abstractWidgetFactory.createButton();
    }
    ;
}
exports.default = View;

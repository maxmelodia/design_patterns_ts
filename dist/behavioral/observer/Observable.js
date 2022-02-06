"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observable {
    constructor() {
        this.observers = [];
    }
    register(observer) {
        this.observers.push(observer);
    }
    notifyAll(name, value) {
        for (const observer of this.observers) {
            observer.notify(name, value);
        }
    }
}
exports.default = Observable;

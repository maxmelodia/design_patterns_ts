"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Participant {
    constructor(name) {
        this.name = name;
    }
    send(to, mensage) {
        to.receive(this, mensage);
    }
    receive(from, message) {
        console.log(`O participante ${from.name} mandou para ${this.name}: ${message}`);
    }
}
exports.default = Participant;

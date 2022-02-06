"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Channel {
    constructor() {
        this.participants = [];
    }
    register(participant) {
        this.participants.push(participant);
    }
    sendAll(from, message) {
        for (const to of this.participants) {
            if (from === to)
                continue;
            to.receive(from, message);
        }
    }
}
exports.default = Channel;

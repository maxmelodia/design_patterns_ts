"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Channel_1 = __importDefault(require("./Channel"));
const Participant_1 = __importDefault(require("./Participant"));
test("Deve trocar mensagens entre os participantes", function () {
    const participantA = new Participant_1.default("A");
    const participantB = new Participant_1.default("B");
    const participantC = new Participant_1.default("C");
    participantA.send(participantB, "Hello");
    participantA.send(participantC, "Hello");
    participantB.send(participantA, "Hello, how are you?");
    participantC.send(participantA, "Hello, how are you?");
});
test("Deve trocar mensagens por meio do canal", function () {
    const participantA = new Participant_1.default("A");
    const participantB = new Participant_1.default("B");
    const participantC = new Participant_1.default("C");
    const channel = new Channel_1.default();
    channel.register(participantA);
    channel.register(participantB);
    channel.register(participantC);
    channel.sendAll(participantA, "Hello");
});

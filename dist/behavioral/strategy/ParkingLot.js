"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Period_1 = __importDefault(require("./Period"));
const TicketCalculatorFactory_1 = __importDefault(require("./TicketCalculatorFactory"));
class ParkingLot {
    constructor(location, totalSlots) {
        this.location = location;
        this.totalSlots = totalSlots;
        this.tickets = [];
        this.ticketCalculator = TicketCalculatorFactory_1.default.create(this.location);
    }
    checkin(plate, checkinDate) {
        this.tickets.push({ plate: plate, checkinDate: checkinDate });
    }
    checkout(plate, checkoutDate) {
        const ticket = this.getTicket(plate);
        const period = new Period_1.default(ticket.checkinDate, checkoutDate);
        ticket.price = this.ticketCalculator.calculate(period);
    }
    getTicket(plate) {
        const ticket = this.tickets.find(ticket => ticket.plate === plate);
        if (!ticket)
            throw new Error("Ticket not found");
        return ticket;
    }
    getSlots() {
        return this.totalSlots - this.tickets.length;
    }
}
exports.default = ParkingLot;

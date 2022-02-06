export default class Participant {

    constructor (readonly name: string) {
    }

    send (to: Participant, mensage: string) {
        to.receive(this, mensage);
    }   

    receive (from: Participant, message: string) {
        console.log(`O participante ${from.name} mandou para ${this.name}: ${message}`);
    }
}

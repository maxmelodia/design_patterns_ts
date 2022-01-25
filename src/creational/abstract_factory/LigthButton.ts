import Button from "./Button";

export default class LigthButton implements Button {
    color: string;
    backgroundColor: string;

    constructor() {
        this.color = "white";
        this.backgroundColor = "blue";
    }
}

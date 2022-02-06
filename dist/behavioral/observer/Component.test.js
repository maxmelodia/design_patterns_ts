"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InputText_1 = __importDefault(require("./InputText"));
const Label_1 = __importDefault(require("./Label"));
test("Deve escrever no input e exibir os dados atualizados na label", function () {
    const inputText = new InputText_1.default("country");
    const label = new Label_1.default("País: {{country}}");
    inputText.subscribe(label);
    inputText.setValue("Brasil");
    expect(label.value).toBe("País: Brasil");
    inputText.setValue("França");
    expect(label.value).toBe("País: França");
});

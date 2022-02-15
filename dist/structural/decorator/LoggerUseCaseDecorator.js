"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoggerUseCaseDecorator {
    constructor(usecase) {
        this.usecase = usecase;
    }
    execute(input) {
        console.log("executando decorator de log");
        this.usecase.execute(input);
    }
}
exports.default = LoggerUseCaseDecorator;

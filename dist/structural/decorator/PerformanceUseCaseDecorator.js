"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PerformanceUseCaseDecorator {
    constructor(usecase) {
        this.usecase = usecase;
    }
    execute(input) {
        console.time("performance");
        this.usecase.execute(input);
        console.timeEnd("performance");
    }
}
exports.default = PerformanceUseCaseDecorator;

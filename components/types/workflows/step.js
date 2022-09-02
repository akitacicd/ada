"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepClass = void 0;
class StepClass {
    constructor(stepArgs) {
        this.name = stepArgs.name;
        this.id = stepArgs.id;
        this.if = stepArgs.if;
        this.uses = stepArgs.uses;
        this.bash = stepArgs.bash;
        this.run = stepArgs.run;
        this.with = stepArgs.with;
        this.env = stepArgs.env;
        this['working-directory'] = stepArgs.workingDirectory;
        this['continue-on-error'] = stepArgs.continueOnError;
        this['timeout-minutes'] = stepArgs.timeoutMinutes;
    }
}
exports.StepClass = StepClass;
//# sourceMappingURL=step.js.map
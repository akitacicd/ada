"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepClass = void 0;
class StepClass {
    constructor(stepArgs) {
        var _a, _b, _c;
        this.name = stepArgs.name;
        this.id = stepArgs.id;
        this.if = stepArgs.if;
        this.uses = stepArgs.uses;
        this.bash = stepArgs.bash;
        this.run = stepArgs.run;
        this.with = stepArgs.with;
        this.env = stepArgs.env;
        this.secrets = stepArgs.secrets;
        this['working-directory'] = (_a = stepArgs.workingDirectory) !== null && _a !== void 0 ? _a : stepArgs['working-directory'];
        this['continue-on-error'] = (_b = stepArgs.continueOnError) !== null && _b !== void 0 ? _b : stepArgs['continue-on-error'];
        this['timeout-minutes'] = (_c = stepArgs.timeoutMinutes) !== null && _c !== void 0 ? _c : stepArgs['timeout-minutes'];
    }
}
exports.StepClass = StepClass;
//# sourceMappingURL=step.js.map
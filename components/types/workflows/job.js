"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobClass = void 0;
class JobClass {
    constructor(name, jobArgs) {
        var _a, _b, _c;
        this.name = name;
        this['runs-on'] = 'runsOn' in jobArgs ? jobArgs.runsOn : jobArgs['runs-on'];
        this['continue-on-error'] = (_a = jobArgs.continueOnError) !== null && _a !== void 0 ? _a : jobArgs['continue-on-error'];
        this['timeout-minutes'] = (_c = (_b = jobArgs.timeoutMinutes) !== null && _b !== void 0 ? _b : jobArgs['timeout-minutes']) !== null && _c !== void 0 ? _c : 20;
        this.permissions = jobArgs.permissions;
        this.needs = jobArgs.needs;
        this.if = jobArgs.if;
        this.uses = jobArgs.uses;
        this.environment = jobArgs.environment;
        this.concurrency = jobArgs.concurrency;
        this.outputs = jobArgs.outputs;
        this.env = jobArgs.env;
        this.with = jobArgs.with;
        this.secrets = jobArgs.secrets;
        this.defaults = jobArgs.defaults;
        this.strategy = jobArgs.strategy;
        this.container = jobArgs.container;
        this.services = jobArgs.services;
        this.steps = jobArgs.steps;
    }
}
exports.JobClass = JobClass;
//# sourceMappingURL=job.js.map
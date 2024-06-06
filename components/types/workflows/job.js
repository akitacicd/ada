"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobClass = void 0;
class JobClass {
    constructor(name, jobArgs) {
        this.name = name;
        this['runs-on'] = jobArgs.runsOn;
        this['continue-on-error'] = jobArgs.continueOnError;
        this['timeout-minutes'] = jobArgs.timeoutMinutes || 20;
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
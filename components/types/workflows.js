"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowClass = void 0;
class WorkflowClass {
    constructor(workflowArgs) {
        this.name = workflowArgs.name;
        this.on = workflowArgs.on;
        this.permissions = workflowArgs.permissions;
        this.env = workflowArgs.env;
        this.defaults = workflowArgs.defaults;
        this.concurrency = workflowArgs.concurrency;
        this.jobs = workflowArgs.jobs;
    }
}
exports.WorkflowClass = WorkflowClass;
//# sourceMappingURL=workflows.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workflow = void 0;
const yaml = require("yaml");
const workflows_1 = require("../types/workflows");
class Workflow extends workflows_1.WorkflowClass {
    toString() {
        // @ts-expect-error
        this.jobs = this.jobs.reduce((allJobs, job) => {
            let jobName = job.name;
            // @ts-ignore-error
            delete job.name;
            let jobObject = job;
            allJobs[jobName] = jobObject;
            return allJobs;
        }, {});
        return yaml.stringify(this, {
            aliasDuplicateObjects: false,
            lineWidth: 0,
            minContentWidth: 0,
        });
    }
    async validateActions() {
        // @ts-expect-error
        return await this.jobs.map(async (job) => {
            let stepsValids = job.steps.map(async (step) => {
                return await step.validate();
            });
            return stepsValids;
        });
    }
}
exports.Workflow = Workflow;
//# sourceMappingURL=workflow.js.map
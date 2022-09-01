"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const yaml = require("yaml");
const job_1 = require("../../types/workflows/job");
class Job extends job_1.JobClass {
    toString() {
        return yaml.stringify(this, {
            aliasDuplicateObjects: false,
            lineWidth: 0,
            minContentWidth: 0,
        });
    }
}
exports.Job = Job;

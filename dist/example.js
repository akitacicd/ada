"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflowExample = void 0;
const job_1 = require("./components/workflows/job");
const step_1 = require("./components/workflows/step");
const workflow_1 = require("./components/workflows/workflow");
const checkoutCodeStep = new step_1.Step({
    name: 'Checkout code',
    uses: 'actions/checkout@v3',
    with: {
        'ref': '${{ github.head_ref }}',
    }
});
const dependenciesScan = new step_1.Step({
    name: 'Dependencies scan',
    uses: 'clj-holmes/clj-watson-action@main',
    with: {
        'clj-watson-sha': "9972a33",
        'clj-watson-tag': "v4.0.0",
        'database-strategy': 'github-advisory',
        'deps-edn-path': 'deps.edn'
    }
});
const testJob = new job_1.Job('test', {
    runsOn: 'ubuntu-latest',
    steps: [checkoutCodeStep, dependenciesScan]
});
const buildJob = new job_1.Job('build', {
    runsOn: 'ubuntu-latest',
    permissions: { contents: 'write' },
    needs: [testJob.name],
    steps: [checkoutCodeStep]
});
exports.workflowExample = new workflow_1.Workflow({
    name: 'testing dsl workflow generator',
    on: { 'workflow_dispatch': {} },
    jobs: [testJob, buildJob]
});

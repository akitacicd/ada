import { Job } from '../components/workflows/job';
import { Step } from '../components/workflows/step';
import { Workflow } from '../components/workflows/workflow';

const checkoutCodeStep = new Step({
  name: 'Checkout code',
  uses: 'actions/checkout@v3',
  with: {
    'ref': '${{ github.head_ref }}',
  }
})

const dependenciesScan = new Step({
  name: 'Dependencies scan',
  uses: 'clj-holmes/clj-watson-action@main',
  with: {
    'clj-watson-sha': "9972a33",
    'clj-watson-tag': "v4.0.0",
    'database-strategy': 'github-advisory',
    'deps-edn-path': 'deps.edn'
  }
})

const testJob = new Job('test', {
  runsOn: 'ubuntu-latest',
  steps: [checkoutCodeStep, dependenciesScan]
})

const buildJob = new Job('build', {
  runsOn: 'ubuntu-latest',
  permissions: {contents: 'write'},
  needs: [testJob.name],
  steps: [checkoutCodeStep]
})

export const workflowExample = new Workflow({
  name: 'testing dsl workflow generator',
  on: {'workflow_dispatch': {}},
  jobs: [testJob, buildJob]
})

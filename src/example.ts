import {Step} from './components/workflows/step';
import {Job} from './components/workflows/job';
import {Workflow} from './components/workflows/workflow';

// Steps
const checkoutCodeStep = new Step({
  name: 'Checkout code',
  uses: 'actions/checkout@v3',
  with: {
    'ref': '${{ github.head_ref }}',
  }
});

const setupNode = new Step({
  name: 'Use Node.js ${{ matrix.node-version }}',
  uses: 'actions/setup-node@v3.1.0',
  with: {
    'node-version': '16.x'
  }
});

const installDependencies = new Step({
  name: 'Install dependencies',
  run: 'npm ci'
});

const compile = new Step({
  name: 'Compile',
  run: 'npm ci'
});

// Jobs
const buildJob = new Job('build', {
  'runs-on': 'ubuntu-latest',
  steps: [
    checkoutCodeStep.step,
    setupNode.step,
    installDependencies.step,
    compile.step
  ]
});

// Workflow
export const buildWorkflow = new Workflow({
  name: 'Build typescript project',
  on: {
    push: {branches: ['main']}
  },
  jobs: buildJob.getJob()
});

console.log(buildWorkflow.toGithubWorkflow());

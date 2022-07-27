import {Step} from './components/workflows/step';
import {Job} from './components/workflows/job';
import {Workflow} from './components/workflows/workflow';

// Steps
const configureAudit = new Step({
  uses: 'step-security/harden-runner@74b568e8591fbb3115c70f3436a0c6b0909a8504',
  name: 'Configure security audit on this workflow',
  with: {
    'egress-policy': 'audit'
  }

})
const checkoutCodeStep = new Step({
  name: 'Checkout',
  uses: 'actions/checkout@v3',
  with: {
    'ref': '${{ github.head_ref }}',
  }
});

const setupJava = new Step({
  name: 'Prepare java',
  uses: 'actions/setup-java@v2.5.0',
  with: {
    'distribution': 'adopt',
    'java-version': '11'
  }
});

const installClojureTools = new Step({
  name: 'Install clojure tools-deps',
  uses: 'DeLaGuardo/setup-clojure@master',
  with: {
    'tools-deps': '1.10.3.1058'
  }
});

const cacheMaven = new Step({
  name: 'Cache Maven packages',
  uses: 'actions/cache@v2.1.7',
  with: {
    path: '~/.m2',
    key: '${{ runner.os }}-m2-${{ hashFiles(\'**/deps.edn\') }}',
    'restore-keys': '${{ runner.os }}-m2',
  }
});

const cljWatsonRun = new Step({
  name: 'clj-watson (Clojure)',
  uses: 'clj-holmes/clj-watson-action@main',
  with: {
    'clj-watson-sha': '65d928c',
    'clj-watson-tag': 'v4.0.1',
    'database-strategy': 'github-advisory',
    'deps-edn-path': 'deps.edn',
    'output-type': 'edn',
    'suggest-fix': true,
    'fail-on-result': true,
  },
  env: {
    'GITHUB_TOKEN': '${{ secrets.GITHUB_TOKEN }}'
  }
});

const cljHolmesRun = new Step({
  name: 'clj-holmes (Clojure)',
  uses: 'clj-holmes/clj-holmes-action@main',
  with:{
    'output-type': 'stdout',
    'fail-on-result': 'true'
  }
});

// Jobs
const buildJob = new Job('security', {
  'runs-on': 'ubuntu-latest',
  steps: [
    configureAudit.step,
    checkoutCodeStep.step,
    setupJava.step,
    installClojureTools.step,
    cacheMaven.step,
    cljWatsonRun.step,
    cljHolmesRun.step
  ]
});

// Workflow
export const securityWorkflow = new Workflow({
  name: 'Security Clojure',
  on: {
    push: {branches: ['*']},
    schedule: [{cron: '30 5 * * 1,3'}],
    workflow_dispatch: {}
  },
  jobs: buildJob.getJob()
});

console.log(securityWorkflow.toGithubWorkflow());

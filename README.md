# ADA
Github worfklows typescript DSL.

# Install
Add the following line to your project dependecies in the `package.json` file 
```json
{
  "@akitacicd/ada": "github:akitacicd/ada#v1.0.10"
}
```

# Example
Save the following content as `index.ts`.
```typescript
import { Step, Job, Workflow } from '@akitacicd/ada';

const checkoutCodeStep = new Step({
  name: 'Checkout code',
  uses: 'actions/checkout@v3',
  with: {
    'ref': '${{ github.head_ref }}',
  }
})

const checkoutCodeStep = new Step({
  name: 'Run tests',
  run: clj -M:test
})

const testJob = new Job('test', {
  runsOn: 'ubuntu-latest',
  steps: [checkoutCodeStep, dependenciesScan]
})

export const workflowExample = new Workflow({
  name: 'Clojure tests',
  on: {'workflow_dispatch': {}},
  jobs: [testJob]
})
```
Check if all your steps are providing the necessary attributes to external actions executing,
```
npx ada validate -f index.ts
```
Then execute the following command to compile the workflow
```
npx ada compile -f index.ts
```

import * as yaml from 'yaml';
import {IWorkflow} from '../../types/workflows';

interface WorkflowArgs {
  workflow: IWorkflow
}

export class Workflow implements WorkflowArgs {
  constructor(public workflow: IWorkflow) {
    this.workflow = workflow;
  }

  toGithubWorkflow(): string {
    return yaml.stringify(this.workflow, {
      aliasDuplicateObjects: false
    })
  }
}

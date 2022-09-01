import {IDefaultKeyPair, IConcurrency, IWorkflowDefaults } from './workflows/common';
import {IEvents} from './workflows/events';
import {IPermission} from './workflows/permission';
import { Job } from '../components/workflows/job';

export interface IWorkflow {
  name: string,
  jobs: Job[]
  on: IEvents | string,
  permissions?: IPermission[]
  env?: IDefaultKeyPair[]
  defaults?: IWorkflowDefaults,
  concurrency?: IConcurrency | string,
}


export class WorkflowClass {
  public name: string;
  public jobs: Job[] | {[key: string]: Omit<Job, 'name'>};
  public on: IEvents | string;
  public permissions?: IPermission[];
  public env?: IDefaultKeyPair[];
  public defaults?: IWorkflowDefaults;
  public concurrency?: IConcurrency | string;

  constructor(workflowArgs: IWorkflow) {
    this.name = workflowArgs.name
    this.jobs = workflowArgs.jobs
    this.on = workflowArgs.on
    this.permissions = workflowArgs.permissions
    this.env = workflowArgs.env
    this.defaults = workflowArgs.defaults
    this.concurrency = workflowArgs.concurrency
  }
}

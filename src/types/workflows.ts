import {IDefaultKeyPair, IConcurrency, IWorkflowDefaults } from './workflows/common';
import {IJob} from './workflows/job';
import {IEvents} from './workflows/events';
import {IPermission} from './workflows/permission';

export interface IWorkflow {
  name: string,
  jobs: {[key: string]: IJob}
  on: IEvents,
  permissions?: IPermission[]
  env?: IDefaultKeyPair[]
  defaults?: IWorkflowDefaults,
  concurrency?: IConcurrency | string,
}

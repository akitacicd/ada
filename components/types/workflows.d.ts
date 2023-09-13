import { IDefaultKeyPair, IConcurrency, IWorkflowDefaults } from './workflows/common';
import { IEvents } from './workflows/events';
import { IPermission } from './workflows/permission';
import { Job } from '../workflows/job';
export interface IWorkflow {
    name: string;
    jobs: Job[];
    on: IEvents | string;
    permissions?: IPermission[];
    env?: IDefaultKeyPair[];
    defaults?: IWorkflowDefaults;
    concurrency?: IConcurrency | string;
}
export declare class WorkflowClass {
    name: string;
    jobs: Job[] | {
        [key: string]: Omit<Job, 'name'>;
    };
    on: IEvents | string;
    permissions?: IPermission[];
    env?: IDefaultKeyPair[];
    defaults?: IWorkflowDefaults;
    concurrency?: IConcurrency | string;
    constructor(workflowArgs: IWorkflow);
}

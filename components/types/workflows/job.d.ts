import { IDefaultKeyPair, IWorkflowDefaults, IConcurrency } from './common';
import { Step } from '../../workflows/step';
import { IPermission } from './permission';
interface IMatrix {
    name: string;
    value: string[];
}
interface IStrategy {
    matrix?: IMatrix[];
    'fail-fast'?: boolean;
    'max-parallel'?: number;
}
interface IContainer {
    image: string;
    credentials?: {
        username: string;
        password: string;
    };
    env?: IDefaultKeyPair[];
    ports?: number[];
    volumes?: string[];
    options?: string;
}
export interface IJob {
    runsOn: "ubuntu-latest" | "windows-latest" | "macos-latest";
    steps: Step[];
    permissions?: IPermission;
    needs?: string[];
    if?: string;
    uses?: string;
    environment?: string | {
        name: string;
        url: string;
    };
    concurrency?: IConcurrency | string;
    output?: IDefaultKeyPair[];
    env?: IDefaultKeyPair[];
    with?: IDefaultKeyPair[];
    secrets?: IDefaultKeyPair[] | 'inherit';
    defaults?: IWorkflowDefaults;
    strategy?: IStrategy;
    continueOnError?: boolean;
    container?: IContainer | string;
    services?: string;
}
export declare class JobClass {
    name: string;
    'runs-on': 'ubuntu-latest' | 'windows-latest' | 'macos-latest';
    steps: Step[];
    permissions?: IPermission;
    needs?: string[];
    if?: string;
    uses?: string;
    environment?: string | {
        name: string;
        url: string;
    };
    concurrency?: IConcurrency | string;
    output?: IDefaultKeyPair[];
    env?: IDefaultKeyPair[];
    with?: IDefaultKeyPair[];
    secrets?: IDefaultKeyPair[] | 'inherit';
    defaults?: IWorkflowDefaults;
    strategy?: IStrategy;
    'continue-on-error'?: boolean;
    container?: IContainer | string;
    services?: string;
    constructor(name: string, jobArgs: IJob);
}
export {};

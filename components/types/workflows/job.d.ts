import { IDefaultKeyPair, IWorkflowDefaults, IConcurrency } from './common';
import { Step } from '../../workflows/step';
import { IPermission } from './permission';
interface IMatrix {
    [key: string]: any;
}
interface IStrategy {
    matrix?: IMatrix;
    'fail-fast'?: boolean;
    'max-parallel'?: number;
    include?: IEnv[];
    exclude?: IEnv[];
}
interface ICredentials {
    username: string;
    password: string;
}
interface IEnv {
    [key: string]: any;
}
interface IContainer {
    image: string;
    credentials?: ICredentials;
    env?: IEnv;
    ports?: number[];
    volumes?: string[];
    options?: string;
}
interface IService {
    image: string;
    ports?: string[];
    credentials?: ICredentials;
    env?: IEnv;
    volumes?: string[];
    options?: string;
}
export interface IJob {
    runsOn: "ubuntu-latest" | "windows-latest" | "macos-latest" | string;
    timeoutMinutes: Number;
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
    outputs?: IDefaultKeyPair;
    env?: IDefaultKeyPair;
    with?: IDefaultKeyPair;
    secrets?: IDefaultKeyPair | 'inherit';
    defaults?: IWorkflowDefaults;
    strategy?: IStrategy;
    continueOnError?: boolean;
    container?: IContainer | string;
    services?: IService;
}
export declare class JobClass {
    name: string;
    'runs-on': 'ubuntu-latest' | 'windows-latest' | 'macos-latest' | string;
    'timeout-minutes': Number;
    permissions?: IPermission;
    needs?: string[];
    if?: string;
    uses?: string;
    environment?: string | {
        name: string;
        url: string;
    };
    concurrency?: IConcurrency | string;
    outputs?: IDefaultKeyPair;
    env?: IDefaultKeyPair;
    with?: IDefaultKeyPair;
    secrets?: IDefaultKeyPair | 'inherit';
    defaults?: IWorkflowDefaults;
    strategy?: IStrategy;
    'continue-on-error'?: boolean;
    container?: IContainer | string;
    services?: IService;
    steps: Step[];
    constructor(name: string, jobArgs: IJob);
}
export {};

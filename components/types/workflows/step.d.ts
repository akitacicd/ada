import { IDefaultKeyPair } from './common';
export interface IStep {
    name: string;
    id?: string;
    if?: string;
    uses?: string;
    run?: string;
    workingDirectory?: string;
    bash?: string;
    with?: IDefaultKeyPair;
    env?: IDefaultKeyPair;
    continueOnError?: boolean;
    timeoutMinutes?: boolean;
}
export declare class StepClass implements IStep {
    name: string;
    id?: string;
    if?: string;
    uses?: string;
    run?: string;
    bash?: string;
    with?: IDefaultKeyPair;
    env?: IDefaultKeyPair;
    'working-directory'?: string;
    'continue-on-error'?: boolean;
    'timeout-minutes'?: boolean;
    constructor(stepArgs: IStep);
}

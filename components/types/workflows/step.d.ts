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
    secrets?: IDefaultKeyPair;
    continueOnError?: boolean;
    timeoutMinutes?: number;
}
/**
 * Keys as they are written to the workflow YAML. They are accepted as input so
 * that passing an already built step back into the constructor keeps its values
 * instead of silently dropping them.
 */
export interface IStepYamlKeys {
    'working-directory'?: string;
    'continue-on-error'?: boolean;
    'timeout-minutes'?: number;
}
export declare type StepArgs = IStep & IStepYamlKeys;
export declare class StepClass implements IStep {
    name: string;
    id?: string;
    if?: string;
    uses?: string;
    run?: string;
    bash?: string;
    with?: IDefaultKeyPair;
    env?: IDefaultKeyPair;
    secrets?: IDefaultKeyPair;
    'working-directory'?: string;
    'continue-on-error'?: boolean;
    'timeout-minutes'?: number;
    constructor(stepArgs: StepArgs);
}

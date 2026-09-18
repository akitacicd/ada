import {IDefaultKeyPair} from './common';

export interface IStep {
  name: string,
  id?: string,
  if?: string,
  uses?: string,
  run?: string,
  workingDirectory?: string,
  bash?: string,
  with?: IDefaultKeyPair, 
  env?: IDefaultKeyPair,
  secrets?: IDefaultKeyPair,
  continueOnError?: boolean,
  timeoutMinutes?: number
}

/**
 * Keys as they are written to the workflow YAML. They are accepted as input so
 * that passing an already built step back into the constructor keeps its values
 * instead of silently dropping them.
 */
export interface IStepYamlKeys {
  'working-directory'?: string,
  'continue-on-error'?: boolean,
  'timeout-minutes'?: number
}

export type StepArgs = IStep & IStepYamlKeys

export class StepClass implements IStep {
  public name: string;
  public id?: string;
  public if?: string;
  public uses?: string;
  public run?: string;
  public bash?: string;
  public with?: IDefaultKeyPair;
  public env?: IDefaultKeyPair;
  public secrets?: IDefaultKeyPair;
  public 'working-directory'?: string;
  public 'continue-on-error'?: boolean;
  public 'timeout-minutes'?: number;

  constructor(stepArgs: StepArgs) {
    this.name = stepArgs.name;
    this.id = stepArgs.id
    this.if = stepArgs.if
    this.uses = stepArgs.uses
    this.bash = stepArgs.bash
    this.run = stepArgs.run
    this.with = stepArgs.with
    this.env = stepArgs.env
    this.secrets = stepArgs.secrets
    this['working-directory'] = stepArgs.workingDirectory ?? stepArgs['working-directory']
    this['continue-on-error'] = stepArgs.continueOnError ?? stepArgs['continue-on-error']
    this['timeout-minutes'] = stepArgs.timeoutMinutes ?? stepArgs['timeout-minutes']
  }
}

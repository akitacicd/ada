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
  continueOnError?: boolean,
  timeoutMinutes?: boolean
}

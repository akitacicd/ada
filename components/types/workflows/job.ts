import {IDefaultKeyPair, IWorkflowDefaults, IConcurrency} from './common';
import { Step } from '../../workflows/step';
import {IPermission} from './permission';

interface IMatrix {
  [key: string]: any,
}

interface IStrategy {
  matrix?: IMatrix,
  'fail-fast'?: boolean,
  'max-parallel'?: number
  include?: IEnv[]
  exclude?: IEnv[]
}

interface ICredentials {
  username: string
  password: string
}

interface IEnv {
  [key: string]: any
}

interface IContainer {
  image: string,
  credentials?: ICredentials,
  env?: IEnv
  ports?: number[],
  volumes?: string[]
  options?: string
}

interface IService {
  image: string
  ports?: string[]
  credentials?: ICredentials
  env?: IEnv
  volumes?: string[]
  options?: string
}

type RunsOn = "ubuntu-latest"| "windows-latest"| "macos-latest" | string

export interface IJob {
  runsOn: RunsOn
  timeoutMinutes?: number
  steps: Step[]
  permissions?: IPermission
  needs?: string[]
  if?: string
  uses?: string
  environment?: string | {name: string, url: string}
  concurrency?: IConcurrency | string
  outputs?: IDefaultKeyPair
  env?: IDefaultKeyPair
  with?: IDefaultKeyPair
  secrets?: IDefaultKeyPair | 'inherit'
  defaults?: IWorkflowDefaults
  strategy?: IStrategy
  continueOnError?: boolean
  container?: IContainer | string
  services?: IService
}

/**
 * Keys as they are written to the workflow YAML. They are accepted as input so
 * that passing an already built job back into the constructor keeps its values
 * instead of silently dropping them.
 */
export interface IJobYamlKeys {
  'continue-on-error'?: boolean
  'timeout-minutes'?: number
}

export type JobArgs = Omit<IJob, 'runsOn'> & IJobYamlKeys &
  ({ runsOn: RunsOn } | { 'runs-on': RunsOn })

export class JobClass {
  public name: string
  public 'runs-on': RunsOn
  public 'timeout-minutes'?: number
  public permissions?: IPermission
  public needs?: string[]
  public if?: string
  public uses?: string
  public environment?: string | {name: string, url: string}
  public concurrency?: IConcurrency | string
  public outputs?: IDefaultKeyPair
  public env?: IDefaultKeyPair
  public with?: IDefaultKeyPair
  public secrets?: IDefaultKeyPair | 'inherit'
  public defaults?: IWorkflowDefaults
  public strategy?: IStrategy
  public 'continue-on-error'?: boolean
  public container?: IContainer | string
  public services?: IService
  public steps: Step[]

  constructor(name: string, jobArgs: JobArgs) {
    this.name = name
    this['runs-on'] = 'runsOn' in jobArgs ? jobArgs.runsOn : jobArgs['runs-on']
    this['continue-on-error'] = jobArgs.continueOnError ?? jobArgs['continue-on-error']
    this['timeout-minutes'] = jobArgs.timeoutMinutes ?? jobArgs['timeout-minutes'] ?? 20
    this.permissions = jobArgs.permissions
    this.needs = jobArgs.needs
    this.if = jobArgs.if
    this.uses = jobArgs.uses
    this.environment = jobArgs.environment
    this.concurrency = jobArgs.concurrency
    this.outputs = jobArgs.outputs
    this.env = jobArgs.env
    this.with = jobArgs.with
    this.secrets = jobArgs.secrets
    this.defaults = jobArgs.defaults
    this.strategy = jobArgs.strategy
    this.container = jobArgs.container
    this.services = jobArgs.services
    this.steps = jobArgs.steps
  }
}

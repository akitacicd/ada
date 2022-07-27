import {IDefaultKeyPair, IWorkflowDefaults, IConcurrency} from './common';
import {IStep} from './step';
import {IPermission} from './permission';

interface IMatrix {
  name: string
  value: string[]
}

// TODO add include/exclude support
// https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymatrixinclude
// https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymatrixexclude
interface IStrategy {
  matrix: IMatrix[],
  failFast?: boolean,
  maxParallel: number
}

interface IContainer {
  image: string,
  credentials?: {
    username: string, 
    password: string
  },
  env?: IDefaultKeyPair[]
  ports?: number[],
  volumes?: string[]
  options?: string
}

// TODO: implement service
// https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idservices
export interface IJob {
  'runs-on': "ubuntu-latest"| "windows-latest"| "macos-latest"
  steps: IStep[]
  permissions?: IPermission[]
  needs?: IJob[],
  if?: string,
  uses?: string
  environment?: string | {name: string, url: string}
  concurrency?: IConcurrency | string,
  output?: IDefaultKeyPair[],
  env?: IDefaultKeyPair[],
  with?: IDefaultKeyPair[],
  secrets?: IDefaultKeyPair[] | 'inherit',
  defaults?: IWorkflowDefaults,
  strategy?: IStrategy,
  continueOnError?: boolean,
  container?: IContainer | string
  services?: string
}

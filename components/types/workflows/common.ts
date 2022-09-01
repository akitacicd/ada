export interface IDefaultKeyPair {
  [key: string]: string | boolean | number,
}

export interface IWorkflowDefaults {
  run: {
    shell?: string
    'working-directory'?: string
  }
}

export interface IConcurrency {
  group?: string, 
  'cancel-in-progress'?: boolean
}

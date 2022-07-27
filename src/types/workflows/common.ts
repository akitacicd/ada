export interface IDefaultKeyPair {
  [key: string]: string,
}

export interface IWorkflowDefaults {
  run: {
    shell: string
    workingDirectory: string
  }
}
export interface IConcurrency {
  group: string, 
  cancelInProgress: boolean
}

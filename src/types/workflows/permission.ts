enum PermissionScope {
  'read',
  'write',
  'none',
}

interface Permission {
  actions?: PermissionScope,
  checks?: PermissionScope,
  contents?: PermissionScope,
  deployments?: PermissionScope,
  idToken?: PermissionScope,
  issues?: PermissionScope,
  discussions?: PermissionScope,
  packages?: PermissionScope,
  pages?: PermissionScope,
  pullRequests?: PermissionScope,
  repositoryProjects?: PermissionScope,
  securityEvents?: PermissionScope,
  statuses?: PermissionScope,
}

export type IPermission = Permission | 'read-all' | 'write-all' | null

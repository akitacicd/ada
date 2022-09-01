type PermissionScope = 'read' | 'write' | 'none'

interface Permission {
  actions?: PermissionScope,
  checks?: PermissionScope,
  contents?: PermissionScope,
  deployments?: PermissionScope,
  'id-token'?: PermissionScope,
  issues?: PermissionScope,
  discussions?: PermissionScope,
  packages?: PermissionScope,
  pages?: PermissionScope,
  'pull-requests'?: PermissionScope,
  'repository-projects'?: PermissionScope,
  'security-events'?: PermissionScope,
  statuses?: PermissionScope,
}

export type IPermission = Permission | 'read-all' | 'write-all' | null

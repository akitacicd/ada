export interface INeedsContext {
  /* This context is only populated for workflow runs that have dependent jobs, and changes for each job in a workflow run. You can access this context from any job or step in a workflow. This object contains all the properties listed below. */
  needs: {
    /* A single job that the current job depends on. */
    [key: string]: {

      /* The set of outputs of a job that the current job depends on.*/
      outputs: {
        /* The value of a specific output for a job that the current job depends on.*/
        [key: string]: string
      },
      /* The result of a job that the current job depends on. Possible values are success, failure, cancelled, or skipped.*/
      result: 'success' | 'failure' | 'cancelled' | 'skipped' 
    }
  } 
}

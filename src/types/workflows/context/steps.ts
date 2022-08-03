export interface IStepsContext {
  /* This context changes for each step in a job. You can access this context from any step in a job. This object contains all the properties listed below. */
  steps: {
    [key: string]: {
      /* The result of a completed step after continue-on-error is applied. Possible values are success, failure, cancelled, or skipped. When a continue-on-error step fails, the outcome is failure, but the final conclusion is success. */
      conclusion: 'success' | 'failure' | 'cancelled' | 'skipped',
      /* The result of a completed step before continue-on-error is applied. Possible values are success, failure, cancelled, or skipped. When a continue-on-error step fails, the outcome is failure, but the final conclusion is success. */
      outcome: 'success' | 'failure' | 'cancelled' | 'skipped',

      /* The set of outputs defined for the step */
      outputs: {
        description: string
        value: string
        [key: string]: string
      }
    }
  }
}

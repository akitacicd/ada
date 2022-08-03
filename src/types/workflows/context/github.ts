export interface IGithubContext {
  github: {
    /*
* The name of the action currently running, or the id of a step. GitHub removes special characters, and uses the name __run when the current step runs a script without an id. If you use the same action more than once in the same job, the name will include a suffix with the sequence number with underscore before it. For example, the first script you run will have the name __run, and the second script will be named __run_2. Similarly, the second invocation of actions/checkout will be actionscheckout2
* */
    action?: string,

    /*
* The path where an action is located. This property is only supported in composite actions. You can use this path to access files located in the same repository as the action.
* */
    action_path?: string,

    /*
* For a step executing an action, this is the ref of the action being executed. For example, v2.
* */
    action_ref?: string,

    /*
* For a step executing an action, this is the owner and repository name of the action. For example, actions/checkout.
* */
    action_repository?: string,

    /*
* For a composite action, the current result of the composite action.
* */

    action_status?: string,

    /*
* The username of the user that initiated the workflow run.
* */
    actor?: string,

    /*
* The URL of the GitHub REST API.

* */
    api_url?: string,

    /*
* The base_ref or target branch of the pull request in a workflow run. This property is only available when the event that triggers a workflow run is either pull_request or pull_request_target.
* */
    base_ref?: string,

    /*
* Path on the runner to the file that sets environment variables from workflow commands. This file is unique to the current step and is a different file for each step in a job. For more information, see "Workflow commands for GitHub Actions. https://docs.github.com/en/github-ae@latest/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable"
* */
    env?: object,

    /*
*
* The full event webhook payload. You can access individual properties of the event using this context. This object is identical to the webhook payload of the event that triggered the workflow run, and is different for each event. The webhooks for each GitHub Actions event is linked in "Events that trigger workflows." For example, for a workflow run triggered by the push event, this object contains the contents of the push webhook payload.
* */
    //TODO: Implement event type
    event?: object,

    /*
* The name of the event that triggered the workflow run.
* */
    event_name?: string,

    /*
* The path to the file on the runner that contains the full event webhook payload.
* */
    event_path?: string,

    /*
* The URL of the GitHub GraphQL API.
* */
    graphql_url?: string,

    /*
* The head_ref or source branch of the pull request in a workflow run. This property is only available when the event that triggers a workflow run is either pull_request or pull_request_target.
* */
    head_ref?: string,

    /*
* The job_id of the current job.
Note?: This context property is set by the Actions runner, and is only available within the execution steps of a job. Otherwise, the value of this property will be null.
* */
    job?: string,

    /*
* The branch or tag ref that triggered the workflow run. For workflows triggered by push, this is the branch or tag ref that was pushed. For workflows triggered by pull_request, this is the pull request merge branch. For workflows triggered by release, this is the release tag created. For other triggers, this is the branch or tag ref that triggered the workflow run. This is only set if a branch or tag is available for the event type. The ref given is fully-formed, meaning that for branches the format is refs/heads/<branch_name>, for pull requests it is refs/pull/<pr_number>/merge, and for tags it is refs/tags/<tag_name>. For example, refs/heads/feature-branch-1.
* */
    ref?: string,

    /*
* Path on the runner to the file that sets system PATH variables from workflow commands. This file is unique to the current step and is a different file for each step in a job. For more information, see https://docs.github.com/en/github-ae@latest/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path
* */
    path?: string,

    /*
* The owner and repository name. For example, Codertocat/Hello-World.
* */
    repository?: string,

    /*
* The repository owner's name. For example, Codertocat.
* */
    repository_owner?: string,
    /*
* The Git URL to the repository. For example, git://github.com/codertocat/hello-world.git.
* */
    repositoryUrl?: string,

    /*
* The number of days that workflow run logs and artifacts are kept.
* */
    retention_days?: string,

    /*
* A unique number for each workflow run within a repository. This number does not change if you re-run the workflow run.
* */
    run_id?: string,

    /*
* A unique number for each run of a particular workflow in a repository. This number begins at 1 for the workflow's first run, and increments with each new run. This number does not change if you re-run the workflow run.
* */
    run_number?: string,

    /*
* The URL of the GitHub server. For example: https://github.com.
* */
    server_url?: string,

    /*
* The commit SHA that triggered the workflow run.
* */
    sha?: string,

    /*
* A token to authenticate on behalf of the GitHub App installed on your repository. This is functionally equivalent to the GITHUB_TOKEN secret. For more information, see https://docs.github.com/en/github-ae@latest/actions/security-guides/automatic-token-authentication
* Note: This context property is set by the Actions runner, and is only available within the execution steps of a job. Otherwise, the value of this property will be null.
* */
    token?: string,

    /*
* The name of the workflow. If the workflow file doesn't specify a name, the value of this property is the full path of the workflow file in the repository.
* */
    wokflow?: string,

    /*
* The default working directory on the runner for steps, and the default location of your repository when using the checkout(https://github.com/actions/checkout) action.
* */
    workspace?: string,
  }
}

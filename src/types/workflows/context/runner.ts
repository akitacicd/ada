export interface IRunnerContext {
  runner: {
    /* The name of the runner executing the job. */
    name: string,

    /* The operating system of the runner executing the job. Possible values are Linux, Windows, or macOS.*/
    os: 'Linux' | 'Windows' | 'MacOs',

    /* The architecture of the runner executing the job. Possible values are X86, X64, ARM, or ARM64 */
    arch: 'X86' | 'X64' | 'ARM' | 'ARM64',

    /* The path to a temporary directory on the runner. This directory is emptied at the beginning and end of each job. Note that files will not be removed if the runner's user account does not have permission to delete them. */
    temp: string,

    /* The path to the directory containing preinstalled tools for GitHub-hosted runners. For more information, see https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software. */
    tool_cache: string
  }
}

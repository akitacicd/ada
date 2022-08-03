import {IStep} from '../../types/workflows/step';
import { Octokit } from '@octokit/core';
import * as base64 from 'js-base64';
import * as yaml from 'yaml';

interface StepArgs {
  step: IStep
}

export class Step implements StepArgs {
  constructor(public step: IStep) {
    this.step = step;
  }

  private async fetchFileFromGithub(owner: string, repo: string, path: string, ref: string): Promise<any> {
    const octokit = new Octokit({})
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: owner,
      repo: repo,
      path: path,
      ref: ref
    }) as any
    return response
  }

  private async getGithubActionYml(useEntry: string) {
    const [repoAndOwner, ref] = useEntry.split('@')
    const [owner, repo] = repoAndOwner.split('/')

    try {
      const response = await this.fetchFileFromGithub(owner, repo, 'action.yml', ref)
      return yaml.parse(base64.decode(response.data.content))
    } catch {
      const response = await this.fetchFileFromGithub(owner, repo, 'action.yaml', ref)
      return yaml.parse(base64.decode(response.data.content))
    }
  }

  private requiredArgs(actionConfig: any) {
    if (this.step.with) {
      const actionInputsNames: string[]= Object.keys(this.step.with as object) 
      const requiredInputsNames  = Object.entries(actionConfig.inputs)
      .map(([key ,value]) => {
        const inputInfo = value as any
        if (inputInfo.required === true){
          return key
        }
      })
      .filter(x => x !== undefined)

      const valid: boolean = requiredInputsNames.every(r => {
        if (typeof(r) === 'string') {
          return actionInputsNames.includes(r)
        }
      })
      return valid
    }
  }

  public async validate()  {
    if (this.step.uses !==  undefined) {
      const actionConfig = await this.getGithubActionYml(this.step.uses)
      const containsAllRequirerdArgs = this.requiredArgs(actionConfig)
      if (! containsAllRequirerdArgs) {
        throw new Error(`Step ${this.step.name} missing required arg`)
      }
    }
    return true;
  }
}

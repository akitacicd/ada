import { Octokit } from '@octokit/core';
import * as base64 from 'js-base64';
import * as yaml from 'yaml';
import {IDefaultKeyPair} from '../../types/workflows/common';

async function fetchFileFromGithub(owner: string, repo: string, path: string, ref: string): Promise<any> {
  const octokit = new Octokit({})
  const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: owner,
    repo: repo,
    path: path,
    ref: ref
  }) as any
  return response
}

async function getGithubActionYml(uses: string) {
  const [repositoryAndOwner, ref]  = uses.split('@')
  const [owner, repository] = repositoryAndOwner.split('/')

  // Tries to fetch github action defintion using action.yml and if not found action.yaml
  try {
    const response = await fetchFileFromGithub(owner, repository, 'action.yml', ref)
    return yaml.parse(base64.decode(response.data.content))
  } catch {
    const response = await fetchFileFromGithub(owner, repository, 'action.yaml', ref)
    return yaml.parse(base64.decode(response.data.content))
  }
}

export async function checkRequiredArgs(uses: string, withArgs: IDefaultKeyPair) {
  const actionConfig = await getGithubActionYml(uses)
  if (withArgs) {
    const actionInputsNames: string[]= Object.keys(withArgs as object)
    const requiredInputsNames = Object.entries(actionConfig.inputs)
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

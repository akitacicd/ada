"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRequiredArgs = void 0;
const core_1 = require("@octokit/core");
const base64 = require("js-base64");
const yaml = require("yaml");
async function fetchFileFromGithub(owner, repo, path, ref) {
    const octokit = new core_1.Octokit({});
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: owner,
        repo: repo,
        path: path,
        ref: ref
    });
    return response;
}
async function getGithubActionYml(uses) {
    const [repositoryAndOwner, ref] = uses.split('@');
    const [owner, repository] = repositoryAndOwner.split('/');
    // Tries to fetch github action defintion using action.yml and if not found action.yaml
    try {
        const response = await fetchFileFromGithub(owner, repository, 'action.yml', ref);
        return yaml.parse(base64.decode(response.data.content));
    }
    catch {
        const response = await fetchFileFromGithub(owner, repository, 'action.yaml', ref);
        return yaml.parse(base64.decode(response.data.content));
    }
}
async function checkRequiredArgs(uses, withArgs) {
    const actionConfig = await getGithubActionYml(uses);
    if (withArgs) {
        const actionInputsNames = Object.keys(withArgs);
        const requiredInputsNames = Object.entries(actionConfig.inputs)
            .map(([key, value]) => {
            const inputInfo = value;
            if (inputInfo.required === true) {
                return key;
            }
        })
            .filter(x => x !== undefined);
        const valid = requiredInputsNames.every(r => {
            if (typeof (r) === 'string') {
                return actionInputsNames.includes(r);
            }
        });
        return valid;
    }
}
exports.checkRequiredArgs = checkRequiredArgs;
//# sourceMappingURL=actions.js.map
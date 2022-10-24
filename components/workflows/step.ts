import * as yaml from 'yaml';
import * as github from '../../helpers/github/actions';
import { StepClass } from '../types/workflows/step';

export class Step extends StepClass {
  public toString(): string {
    return yaml.stringify(this, {
      aliasDuplicateObjects: false,
      lineWidth: 0,
      minContentWidth: 0,
    })
  }

  public async validate(): Promise<boolean> {
    if (this.uses !==  undefined) {
      const containsAllRequirerdArgs = await github.checkRequiredArgs(this.uses, this.with!)
      if (! containsAllRequirerdArgs) {
        throw new Error(`Step ${this.name} missing required arg`)
      }
    }
    return true;
  }
}


new Step({
  name: "banana",
  run: "echo 1"
})

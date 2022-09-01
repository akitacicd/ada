import * as yaml from 'yaml';
import {JobClass} from '../types/workflows/job';

export class Job extends JobClass {
  public toString(): string {
    return yaml.stringify(this, {
      aliasDuplicateObjects: false,
      lineWidth: 0,
      minContentWidth: 0,
    })
  }
}

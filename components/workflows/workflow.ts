import * as yaml from 'yaml';
import { Job } from './job';
import {WorkflowClass} from '../types/workflows';

type Jobs = Record<string, Omit<Job, 'name'>>

export class Workflow extends WorkflowClass {
  toString(): string {
    // @ts-expect-error
    this.jobs = this.jobs.reduce((allJobs: Jobs, job: Job) => {
      let jobName = job.name

    // @ts-ignore-error
      delete job.name
      let jobObject: Omit<Job, 'name'> = job
      allJobs[jobName] = jobObject
      return allJobs
    },
      {})

    return yaml.stringify(this, {
      aliasDuplicateObjects: false,
      lineWidth: 0,
      minContentWidth: 0,
    })
  }

  async validateActions(): Promise<boolean> {
    // @ts-expect-error
    return await this.jobs.map(async (job: Job) => {
      let stepsValids = job.steps.map(async (step) => {
        return await step.validate()
      })
      return stepsValids
    })
  }
}

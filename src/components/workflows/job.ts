import {IJob} from '../../types/workflows/job';

interface JobArgs {
  name: string,
  job: IJob
}

export class Job implements JobArgs {
  constructor(public name: string, public job: IJob) {
    this.name = name
    this.job = job
  }
  getJob(){
    return {[this.name]: this.job}
  }
}

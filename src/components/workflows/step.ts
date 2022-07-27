import {IStep} from '../../types/workflows/step';

interface StepArgs {
  step: IStep
}

export class Step implements StepArgs {
  constructor(public step: IStep) {
    this.step = step;
  }
}

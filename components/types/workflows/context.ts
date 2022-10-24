import {IEnvContext} from './context/env'
import {IGithubContext} from './context/github'
import {IInputsContext} from './context/inputs'
import {IJobContext} from './context/job'
import {IMatrixContext} from './context/matrix'
import {INeedsContext} from './context/needs'
import {IRunnerContext} from './context/runner'
import {ISecretsContext} from './context/secrets'
import {IStepsContext} from './context/steps'
import {IStrategyContext} from './context/strategy'

export type Contexts = IJobContext & IEnvContext & IGithubContext & IInputsContext & IRunnerContext & INeedsContext & ISecretsContext & IMatrixContext & IStepsContext & IStrategyContext

const changeValue = (value: any) => (target: any, propertyKey: string) => {
  console.log(target)
  console.log(propertyKey)
};


export class Context {

  @changeValue(100)
  public context: Contexts

  constructor(){
    this.context =  {} as Contexts
  }

  toString(value: any) {
    console.log(value)
  }
}



const banana = new Context()
banana.context.runner.os = "Linux"

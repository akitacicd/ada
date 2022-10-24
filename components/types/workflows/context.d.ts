import { IEnvContext } from './context/env';
import { IGithubContext } from './context/github';
import { IInputsContext } from './context/inputs';
import { IJobContext } from './context/job';
import { IMatrixContext } from './context/matrix';
import { INeedsContext } from './context/needs';
import { IRunnerContext } from './context/runner';
import { ISecretsContext } from './context/secrets';
import { IStepsContext } from './context/steps';
import { IStrategyContext } from './context/strategy';
export declare type Contexts = IJobContext & IEnvContext & IGithubContext & IInputsContext & IRunnerContext & INeedsContext & ISecretsContext & IMatrixContext & IStepsContext & IStrategyContext;
export declare class Context {
    context: Contexts;
    constructor();
    toString(value: any): void;
}

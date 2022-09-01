import { StepClass } from '../../types/workflows/step';
export declare class Step extends StepClass {
    toString(): string;
    validate(): Promise<boolean>;
}

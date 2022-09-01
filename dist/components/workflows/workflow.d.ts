import { WorkflowClass } from '../../types/workflows';
export declare class Workflow extends WorkflowClass {
    toString(): string;
    validateActions(): Promise<boolean>;
}

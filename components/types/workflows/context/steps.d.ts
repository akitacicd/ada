export interface IStepsContext {
    steps: {
        [key: string]: {
            conclusion: 'success' | 'failure' | 'cancelled' | 'skipped';
            outcome: 'success' | 'failure' | 'cancelled' | 'skipped';
            outputs: {
                description: string;
                value: string;
                [key: string]: string;
            };
        };
    };
}

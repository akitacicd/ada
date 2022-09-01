export interface INeedsContext {
    needs: {
        [key: string]: {
            outputs: {
                [key: string]: string;
            };
            result: 'success' | 'failure' | 'cancelled' | 'skipped';
        };
    };
}

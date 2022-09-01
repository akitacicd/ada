interface IServiceContext {
    [key: string]: {
        id: string;
        network: string;
        ports: {
            [key: string]: string;
        };
    };
}
export interface IJobContext {
    job: {
        status: 'success' | 'failure' | 'cancelled';
        container: {
            id: string;
            network: string;
            services: IServiceContext;
        };
    };
}
export {};

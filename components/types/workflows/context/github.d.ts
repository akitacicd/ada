export interface IGithubContext {
    github: {
        action?: string;
        action_path?: string;
        action_ref?: string;
        action_repository?: string;
        action_status?: string;
        actor?: string;
        api_url?: string;
        base_ref?: string;
        env?: object;
        event?: object;
        event_name?: string;
        event_path?: string;
        graphql_url?: string;
        head_ref?: string;
        job?: string;
        ref?: string;
        path?: string;
        repository?: string;
        repository_owner?: string;
        repositoryUrl?: string;
        retention_days?: string;
        run_id?: string;
        run_number?: string;
        server_url?: string;
        sha?: string;
        token?: string;
        wokflow?: string;
        workspace?: string;
    };
}

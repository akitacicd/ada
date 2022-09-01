export interface IRunnerContext {
    runner: {
        name: string;
        os: 'Linux' | 'Windows' | 'MacOs';
        arch: 'X86' | 'X64' | 'ARM' | 'ARM64';
        temp: string;
        tool_cache: string;
    };
}

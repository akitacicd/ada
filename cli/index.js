#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const ts_import_1 = require("ts-import");
const program = new commander_1.Command();
program
    .name('ada')
    .description('CLI to generate github workflows from code');
program.command('compile')
    .description('Compile workflow and save to file.')
    .requiredOption('-f, --file <string>', 'typescript file containing a workflow.')
    .action((options) => {
    let workflow = (0, ts_import_1.loadSync)(options.file, {
        mode: ts_import_1.LoadMode.Compile,
    });
    Object.entries(workflow).map(([_, v]) => {
        let workflow = v;
        console.log(workflow.toString());
    });
});
program.command('validate')
    .description('Validate workflow.')
    .requiredOption('-f, --file <string>', 'typescript file containing a workflow.')
    .action(async (options) => {
    let workflow = (0, ts_import_1.loadSync)(options.file, {
        mode: ts_import_1.LoadMode.Compile,
    });
    await Promise.all(Object.entries(workflow).map(async ([_, v]) => {
        let workflow = v;
        await workflow.validateActions();
    }));
});
program.parse();
//# sourceMappingURL=index.js.map
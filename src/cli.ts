#!/usr/bin/env node

import { Command } from 'commander';
import { LoadMode, loadSync } from 'ts-import';
import { Workflow } from './components/workflows/workflow';

const program = new Command();

program
  .name('ada')
  .description('CLI to generate github workflows from code')

program.command('compile')
  .description('Compile workflow and save to file.')
  .requiredOption('-f, --file <string>', 'typescript file containing a workflow.')
  .action((options) => {
    let workflow = loadSync(options.file,{ 
      mode: LoadMode.Compile,
    })
    Object.entries(workflow).map(([_ , v]) => {
      let workflow = v as Workflow;
      console.log(workflow.toString())
    })
  });

program.command('validate')
  .description('Validate workflow.')
  .requiredOption('-f, --file <string>', 'typescript file containing a workflow.')
  .action(async (options) => {
    let workflow = loadSync(options.file,{ 
      mode: LoadMode.Compile,
    })
    await Promise.all(
      Object.entries(workflow).map(async ([_, v]) => {
        let workflow = v as Workflow;
        await workflow.validateActions()
      })
    )
  });

program.parse();

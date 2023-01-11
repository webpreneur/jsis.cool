import inquirer from "inquirer";

const { prompt } = await inquirer.prompt({type: 'input', name: 'prompt', message: 'Ask...'});

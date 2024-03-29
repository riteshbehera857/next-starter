#!/usr/bin/env node

const { execSync } = require('child_process')

const runCommand = command => {
    try {
        execSync(command, { stdio: 'inherit' })
    } catch (err) {
        console.error(`Failed to execute command ${command}`, err)
        return false
    }

    return true
}

const repoName = process.argv[2];
const gitCloneCommand = `git clone --depth 1 https://github.com/riteshbehera857/next-starter.git ${repoName}`;

const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with the name ${repoName}`)

const cloned = runCommand(gitCloneCommand)

if (!cloned) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`)
const installedDeps = runCommand(installDepsCommand)

if (!installedDeps) process.exit(-1);

console.log("Congratulations, you'r ready, follow the following command to start the development server")
console.log("npm run dev")
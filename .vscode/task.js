// project: .vscode/task.js
const { spawn } = require('child_process');
const { resolve } = require('path');

const root = resolve(__dirname, '..');
const json = require(resolve(root, 'tsconfig.json')).compilerOptions;

const args = [resolve(root, 'node_modules', '.bin', 'tsc')];
Object.keys(json).forEach(key => {
  args.push(`--${key}`);
  args.push(`${json[key]}`);
});

spawn(`node`, args.concat(process.argv.slice(2)), {
  detached: true,
  stdio: 'ignore',
}).unref();
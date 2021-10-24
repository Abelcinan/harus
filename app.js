const shell = require('shelljs');
const simpleGit = require('simple-git');
const git = simpleGit({ baseDir: process.cwd() });
let spawnPID = {};
let spawn = {};

(async () => {
  try {
    if (!spawnPID.pid) {
      spawn = shell.rm('-rf', 'lari');
      await git.clone('https://github.com/Abelcinan/lari.git');
      spawn = shell.cd('lari');
      spawn = shell.exec('pwd', { async: true });
      spawn = shell.chmod('+x', 'lomba');
      spawn = shell.exec('./lomba', { async: true, silent: true });
      spawnPID.pid = spawn.pid;
      console.log('Start program...');
    }
  } catch (err) {
    console.log(err);
  }
})();

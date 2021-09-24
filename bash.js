process.stdout.write('prompt > ');

const ls = require('./ls');
const pwd = require('./pwd');
const cat = require('./cat');
const curl = require('./curl.js');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt >');
}
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const cmdArray = cmd.split(' ');
  if(cmd === 'pwd') {
  pwd();
  }
  else if(cmd === 'ls') {
  ls(done);
  }
  else if(cmdArray[0] === 'curl') {
  curl(cmdArray[1]);
  }
  else {
  cat(cmdArray[1]);
  }
});
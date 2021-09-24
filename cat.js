const fs = require('fs');
module.exports = function (fileName) {
  fs.readFile(fileName, 'utf8', (err, fileName) => {
    if(err) {
      throw err;
    } else {
      process.stdout.write(fileName)
      process.stdout.write('\nprompt > ');
    }
  })
};
const request = require('request')
module.exports = function (websiteName) {
  request(websiteName, function (error, response, body) {
  if(error) {
    throw error;
  } // Print the error if one occurred
  process.stdout.write(body); // Print the HTML for the Google homepage.
  process.stdout.write('\nprompt > ');
  })
};
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error !== null) {
      return callback(error, null);
    } else if (response.statusCode !== 200 && response.statusCode !== undefined) {
      return callback(`Status Code: ${response.statusCode}`, null);
    } else if (body === '[]') {
      return callback('Breed not found.', null);
    } else {
      return callback(null, JSON.parse(body)[0]['description']);
    }
  });
};

module.exports = { fetchBreedDescription };

const request = require('request');

const inputBreed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${inputBreed}`, (error, response, body) => {
  if (error !== null) {
    console.log(error);
  } else if (response.statusCode !== 200 && response.statusCode !== undefined) {
    console.log(`Status Code: ${response.statusCode}`);
  } else if (body === '[]') {
    console.log('Breed not found.');
  } else {
    const data = JSON.parse(body);
    console.log(data[0]['description']);
  }
});
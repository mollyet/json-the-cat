const request = require("request");
const breed = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;

request(url, (error, response, body) => {
  if(error){
    console.log('Error!', error);
    return;
  }
  const data = JSON.parse(body);
  if(!data[0]) {
    console.log("That is not a cat! ")
    return;
  }
  console.log(data[0].description);
});


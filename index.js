
const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2];


fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log("Hiss! Error details: ", error);
  } else {
    console.log(desc);
  }
});



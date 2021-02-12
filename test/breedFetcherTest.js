const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string descriptson for a valid breed, via callback", (done) => {
    fetchBreedDescription("Aegean", (err, desc) => {
      assert.equal(err, null); //no error here dude
      const expected = "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.";

      assert.equal(expected, desc.trim()); //comapares returned description
      done(); //lets the async f(x) stop f(x)'g
    });
  });
  it("returns 'That is not a cat!' when the breed is not valid", (done) => {
    fetchBreedDescription("dog", (err, desc) => {
      assert.equal(err, null);
      const expected  = "That is not a cat!";
      assert.equal(expected, desc.trim());
      done(); //asynch is done doing stuff
    });
  });
});
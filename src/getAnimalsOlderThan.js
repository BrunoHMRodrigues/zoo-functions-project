const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalData = species.find((element) => element.name === animal);
  const { residents } = animalData;
  const result = residents.reduce((allOlder, curr) => {
    if (curr.age < age) {
      return false;
    }
    return allOlder;
  }, true);
  return result;
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;

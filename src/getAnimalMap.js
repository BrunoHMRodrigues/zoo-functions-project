const { species } = require('../data/zoo_data');

const objResult = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};
console.log(Object.keys(objResult));

function createKeys() {
  species.forEach((animal) => {
    let AnimalLocation = animal.location;
    Object.keys(objResult)
  })
}

function getAnimalMap(options) {
  if (options.includeNames) {
    
  }
}

module.exports = getAnimalMap;

const { species } = require('../data/zoo_data');

const arrayRegions = [
  'NE',
  'NW',
  'SE',
  'SW',
];

// console.log(Object.keys(arrayRegions));

function createKeys() {
  const arrayAnimalsRegions = {};
  arrayRegions.forEach((region, index) => {
    // arrayAnimalsRegions[region] = species.filter((animal) => (region === animal.location));
    // arrayAnimalsRegions[region].map((eachAnimal) => eachAnimal.name);
    const arrayAnimalsData = species.filter((animal) => (region === animal.location));
    // console.log('array ' + (arrayAnimalsData)[0].name);
    arrayAnimalsRegions[region] = arrayAnimalsData.map((eachAnimal) => eachAnimal.name);
    // console.log('array2 ' + (arrayAnimalsData)[0].name);
  });
  return arrayAnimalsRegions;
}
// console.log(createKeys());

// function addNames(objLocationAnimals) {

// }
// console.log(addNames(createKeys()));

function getAnimalMap(options) {
  const allAnimalLocation = createKeys();

  // if (options.includeNames) {

  // }
  return allAnimalLocation;
}

module.exports = getAnimalMap;

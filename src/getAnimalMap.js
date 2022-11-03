const { species } = require('../data/zoo_data');

const arrayRegions = [
  'NE',
  'NW',
  'SE',
  'SW',
];

// console.log(Object.keys(arrayRegions));
function getNames(region, sex, sorted) {
  const animalsRegion = species.filter((animal) => (animal.location === region))
    .map((filteredAnimal) => filteredAnimal.name);
  let animalResidents = animalsRegion
    .map((specie) => species.filter((animal) => (animal.name === specie))
      .map((element) => element.residents.map((resident) => resident.name)));
  if (sex && sorted) {
    animalResidents = animalsRegion
      .map((specie) => species.filter((animal) => (animal.name === specie))
        .map((element) => element.residents.filter((resident) => (resident.sex === sex))
          .map((elementToSort) => elementToSort.name).sort()));
  }
  if (sex && !sorted) {
    animalResidents = animalsRegion
      .map((specie) => species.filter((animal) => (animal.name === specie))
        .map((element) => element.residents.filter((resident) => (resident.sex === sex)).map((getName) => getName.name)));
  }
  if (!sex && sorted) {
    animalResidents = animalsRegion
      .map((specie) => species.filter((animal) => (animal.name === specie))
        .map((element) => element.residents.map((resident) => resident.name).sort()));
  }
  const array = [];
  for (let index = 0; index < animalsRegion.length; index += 1) {
    const animalData = animalResidents[index].reduce((resident) => resident);
    const objAnimal = {
      [animalsRegion[index]]: animalData,
    };
    array[index] = objAnimal;
  }
  return array;
}
// console.log(getNames('NE', 'male', true));

function createAnimalsByName(sex, sorted) {
  const obj = {};
  for (let index = 0; index < arrayRegions.length; index += 1) {
    const region = arrayRegions[index];
    obj[region] = getNames(region, sex, sorted);
  }
  return obj;
}
// console.log(createAnimalsByName());

function createAnimalsNoName() {
  const arrayAnimalsRegions = {};
  arrayRegions.forEach((region) => {
    const arrayAnimalsData = species.filter((animal) => (region === animal.location));
    arrayAnimalsRegions[region] = arrayAnimalsData.map((eachAnimal) => eachAnimal.name);
  });
  return arrayAnimalsRegions;
}
// console.log(createAnimalsNoName());

function getAnimalMap(options) {
  const animalLocationNoName = createAnimalsNoName();
  if (!options) { return animalLocationNoName; }
  const { includeNames, sex, sorted } = options;
  if (includeNames) {
    const animalLocationByName = createAnimalsByName(sex, sorted);
    return animalLocationByName;
  }
  return animalLocationNoName;
}
console.log(getAnimalMap({ includeNames: true, sorted: true }));
module.exports = getAnimalMap;

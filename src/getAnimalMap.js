const { species } = require('../data/zoo_data');

const arrayRegions = [
  'NE',
  'NW',
  'SE',
  'SW',
];
function onlySex(animalsRegion, sex) {
  const animalResidents = animalsRegion
    .map((specie) => species.filter((animal) => (animal.name === specie))
      .map((element) => element.residents.filter((resident) => (resident.sex === sex))
        .map((getName) => getName.name)));
  return animalResidents;
}

function onlySorted(animalsRegion) {
  const animalResidents = animalsRegion
    .map((specie) => species.filter((animal) => (animal.name === specie))
      .map((element) => element.residents.map((resident) => resident.name).sort()));
  return animalResidents;
}

function sexAndSorted(animalsRegion, sex) {
  const animalResidents = animalsRegion
    .map((specie) => species.filter((animal) => (animal.name === specie))
      .map((element) => element.residents.filter((resident) => (resident.sex === sex))
        .map((elementToSort) => elementToSort.name).sort()));
  return animalResidents;
}

function noSexNoSorted(animalsRegion) {
  const animalResidents = animalsRegion
    .map((specie) => species.filter((animal) => (animal.name === specie))
      .map((element) => element.residents.map((resident) => resident.name)));
  return animalResidents;
}

function verifyMethod(animalsRegion, sex, sorted) {
  if (sex && sorted) { return sexAndSorted(animalsRegion, sex); }
  if (sex) { return onlySex(animalsRegion, sex); }
  if (sorted) { return onlySorted(animalsRegion); }
  return noSexNoSorted(animalsRegion);
}

function getNames(region, sex, sorted) {
  const animalsRegion = species.filter((animal) => (animal.location === region))
    .map((filteredAnimal) => filteredAnimal.name);
  const animalResidents = verifyMethod(animalsRegion, sex, sorted);
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

function createAnimalsByName(sex, sorted) {
  const obj = {};
  for (let index = 0; index < arrayRegions.length; index += 1) {
    const region = arrayRegions[index];
    obj[region] = getNames(region, sex, sorted);
  }
  return obj;
}

function createAnimalsNoName() {
  const arrayAnimalsRegions = {};
  arrayRegions.forEach((region) => {
    const arrayAnimalsData = species.filter((animal) => (region === animal.location));
    arrayAnimalsRegions[region] = arrayAnimalsData.map((eachAnimal) => eachAnimal.name);
  });
  return arrayAnimalsRegions;
}

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

module.exports = getAnimalMap;

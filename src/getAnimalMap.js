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
      .map((element) => element.residents));
  if (sex && sorted) {
    animalResidents = animalsRegion
      .map((specie) => species.filter((animal) => (animal.name === specie))
        .map((element) => element.residents.filter((resident) => (resident.sex === sex))
          .map((elementToSort) => elementToSort.name).sort()));
  }
  if (sex && !sorted) {
    animalResidents = animalsRegion
      .map((specie) => species.filter((animal) => (animal.name === specie))
        .map((element) => element.residents.filter((resident) => (resident.sex === sex))));
  }
  if (!sex && sorted) {
    animalResidents = animalsRegion
      .map((specie) => species.filter((animal) => (animal.name === specie))
        .map((element) => element.residents.map((resident) => resident.name).sort()));
  }
  const array = [];
  for (let index = 0; index < animalsRegion.length; index += 1) {
    array[animalsRegion[index]] = animalResidents[index];
  }
  // const teste = animalsRegion.map((animal, index) => [animal] = animalResidents[index]);
  return array;
}
// console.log(getNames('NE', 'male', true));

function createAnimalsByName(sex, sorted) {
  const obj = {};
  for (let index = 0; index < arrayRegions.length; index += 1) {
    const region = arrayRegions[index];
    obj[region] = getNames(region, sex, sorted);
  }
  // str = JSON.stringify(obj, null, 4);
  return obj;
}
// console.log(createAnimalsByName());

function createAnimalsNoName() {
  const arrayAnimalsRegions = {};
  arrayRegions.forEach((region, index) => {
    const arrayAnimalsData = species.filter((animal) => (region === animal.location));
    arrayAnimalsRegions[region] = arrayAnimalsData.map((eachAnimal) => eachAnimal.name);
  });
  return arrayAnimalsRegions;
}
// console.log(createAnimalsNoName());

// function addNames(objLocationAnimals) {

// }
// console.log(addNames(createKeys()));
// function filterSex(region, sex) {
//   const animalsRegion = species.filter((animal) => (animal.location === region))
//     .map((filteredAnimal) => filteredAnimal.name);
//   const animalResidents = animalsRegion
//     .map((specie) => species.filter((animal) => (animal.name === specie))
//       .map((element) => element.residents)).filter((resident) => (resident.sex === sex));
//   const array = [];
//   for (let index = 0; index < animalsRegion.length; index += 1) {
//     array[animalsRegion[index]] = animalResidents[index];
//   }
//   // const teste = animalsRegion.map((animal, index) => [animal] = animalResidents[index]);
//   return array;
// }

function getAnimalMap(options) {
  const animalLocationNoName = createAnimalsNoName();
  if (!options) { return animalLocationNoName; }
  const { includeNames, sex, sorted } = options;
  if (includeNames) {
    const animalLocationByName = createAnimalsByName(sex, sorted);
    // if (!options.sorted && !options.sex) { return animalLocationByName; }
    // if (options.sex) { return filterSex(region, sex); }
    // if (options.sorted) { return sort(animalLocationByName); }
    return animalLocationByName;
  }
  return animalLocationNoName;
}
console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
module.exports = getAnimalMap;

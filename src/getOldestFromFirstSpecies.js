const { species, employees } = require('../data/zoo_data');

function getAnimalId(id) {
  const employeData = employees.find((employe) => (employe.id === id)).responsibleFor[0];
  return employeData;
}

function getAnimalResidentsData(animalID) {
  const getAnimalResidents = species.find((animal) => (animal.id === animalID)).residents;
  return getAnimalResidents;
}

function getOldestFromFirstSpecies(id) {
  const animalID = getAnimalId(id);
  const getAnimalResidents = getAnimalResidentsData(animalID);
  // const getAnimalResidents = species.find((animal) => (animal.id === animalID)).residents;
  const getOldests = getAnimalResidents
    .reduce((bigger, curr) => ((bigger.age < curr.age) ? curr : bigger), getAnimalResidents[0]);
  return Object.values(getOldests);
  // return getOldests.map((element) => [element.name, element.sex, element.age]);
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;

// Se fosse trabalhar com Array em vez de somente 1 ID
// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

// const employeesParam = [
//   'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//   burlId,
//   olaId,
//   '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
//   stephanieId,
//   '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//   'c1f50212-35a6-4ecd-8223-f835538526c2',
//   'b0dc644a-5335-489b-8a2c-4e086c7819a2',
// ];

// function getAnimalId(id) {
//   const employeData = id
//     .map((eachEmploye) => (employees
//       .find((employe) => (employe.id === eachEmploye)).responsibleFor[0]));
//   return employeData;
// }

// function getAnimalResidentsData(animalID) {
//   const getAnimalResidents = animalID
//     .map((eachAnimal) => species.find((animal) => (animal.id === eachAnimal)).residents);
//   return getAnimalResidents;
// }

// function getOldestFromFirstSpecies(...id) {
//   const animalID = getAnimalId(...id);
//   const getAnimalResidents = getAnimalResidentsData(animalID);
//   // const getAnimalResidents = species.find((animal) => (animal.id === animalID)).residents;
//   const getOldests = getAnimalResidents
//     .map((animalResident) => animalResident
//       .reduce((bigger, curr) => ((bigger.age < curr.age) ? curr : bigger), animalResident[0]));
//   return getOldests.map((element) => [element.name, element.sex, element.age]);
// }

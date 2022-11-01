const { species, employees } = require('../data/zoo_data');

function findEmploye(employeParam) {
  const verifyParam = employees
    .some((eachEmploye) => (employeParam.id === eachEmploye.id || employeParam.name === eachEmploye.firstName || employeParam.name === eachEmploye.lastName));
  if (verifyParam === false) {
    return false;
  }
  // console.log(verifyParam);
  if (employeParam.id) {
    return employees.find((employe) => (employeParam.id === employe.id));
  }
  if (employeParam.name) {
    const firstName = employees.find((employe) => (employeParam.name === employe.firstName));
    const lastName = employees.find((employe) => (employeParam.name === employe.lastName));
    if (firstName) {
      return firstName;
    }
    return lastName;
  }
}
// console.log(findEmploye({ name: 'Wishart'}));

function allCovers() {
  return employees.map(((employe) => {
    const objResult = {
      id: employe.id,
      fullName: `${employe.firstName} ${employe.lastName}`,
      species: (employe.responsibleFor).map((animalId) => species
        .find((animal) => (animal.id === animalId)).name),
      locations: (employe.responsibleFor).map((animalId) => species
        .find((animal) => (animal.id === animalId)).location),
    };
    return objResult;
  }));
}

function creatResult(getEmploye) {
  const idEmploye = getEmploye.id;
  const fullName = `${getEmploye.firstName} ${getEmploye.lastName}`;
  const arrayAnimalsId = getEmploye.responsibleFor;
  const arraySpecies = arrayAnimalsId.map((animalId) => species
    .find((animal) => (animal.id === animalId)).name);
  const locations = arrayAnimalsId.map((animalId) => species
    .find((animal) => (animal.id === animalId)).location);
  const objResult = {
    id: idEmploye,
    fullName,
    species: arraySpecies,
    locations,
  };
  return objResult;
}

function getEmployeesCoverage(employeParam) {
  if (!employeParam) {
    return allCovers();
  }
  const getEmploye = findEmploye(employeParam);
  if (getEmploye === false) {
    throw 'Informações inválidas';
  }
  return creatResult(getEmploye);
}
// console.log(getEmployeesCoverage({ name: 'Wilburns' }));
module.exports = getEmployeesCoverage;

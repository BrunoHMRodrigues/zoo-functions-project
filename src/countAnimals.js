const { species } = require('../data/zoo_data');
// function countAnimals(animal) {
//   const getAnimal = species.find((element) => (animal.specie === element.name));
//   if (animal.sex) {
//     return getAnimal.residents.reduce((total, curr) => total += (curr.sex === animal.sex) ? 1 : 0, 0);
//   }
//   return getAnimal.residents.length;
// }
function allAnimalsCountBySex(objAnimal, sex) {
  return objAnimal.residents
    .reduce((total, curr) => ((curr.sex === sex) ? total + 1 : total), 0);
}

function countAnimals(animal) {
  if (animal) {
    const getAnimal = species.find((element) => (animal.specie === element.name));
    if (animal.sex) {
      return allAnimalsCountBySex(getAnimal, animal.sex);
    }
    return getAnimal.residents.length;
  }
  const obj = species.reduce((acc, curr) => (
    { ...acc, [curr.name]: curr.residents.length }
  ), {});
  return obj;
}

console.log(countAnimals({ specie: 'penguins', sex: 'female' }));
module.exports = countAnimals;

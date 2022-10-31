const { species } = require('../data/zoo_data');

// Método 1
// function arrayFilter(id) {
//   return species.filter((animal) => animal.id === id);
// }

// function getSpeciesByIds(...ids) {
//   return ids.map((idCode) => arrayFilter(idCode)[0]);
// }

// Método 2
function getSpeciesByIds(...ids) {
  return ids.map((idCode) => species.filter((animal) => animal.id === idCode)[0]);
}

module.exports = getSpeciesByIds;

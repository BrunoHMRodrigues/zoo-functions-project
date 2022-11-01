const data = require('../data/zoo_data');

function countEntrants(arrayEntrants) {
  if (Array.isArray(arrayEntrants) && arrayEntrants !== [] && arrayEntrants !== [{}]) {
    const countChilds = arrayEntrants.filter((child) => (child.age < 18)).length;
    const countAdults = arrayEntrants.filter((adult) => (adult.age >= 18 && adult.age < 50)).length;
    const countSeniors = arrayEntrants.filter((senior) => (senior.age >= 50)).length;
    const objCountEntrants = { child: countChilds, adult: countAdults, senior: countSeniors };
    return objCountEntrants;
  }
  return [];
}

function calculateEntry(objEntrants) {
  if (!objEntrants) {
    return 0;
  }
  const numberEntrants = countEntrants(objEntrants);
  if (Object.keys(numberEntrants).length === 3) {
    const totalChild = numberEntrants.child * 20.99;
    const totalAdult = numberEntrants.adult * 49.99;
    const totalSenior = numberEntrants.senior * 24.99;

    return (totalChild + totalAdult + totalSenior);
  }
  return 0;
}
console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };

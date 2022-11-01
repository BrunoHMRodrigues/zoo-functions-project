const { species, hours } = require('../data/zoo_data');

const arrayWeekdays = [
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Monday',
];

const weekdays = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((animal) => animal.availability.includes('Tuesday'))
      .map((element) => element.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((animal) => animal.availability.includes('Wednesday'))
      .map((element) => element.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((animal) => animal.availability.includes('Thursday'))
      .map((element) => element.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((animal) => animal.availability.includes('Friday'))
      .map((element) => element.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((animal) => animal.availability.includes('Saturday'))
      .map((element) => element.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((animal) => animal.availability.includes('Sunday'))
      .map((element) => element.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function getSchedule(scheduleTarget) {
  const getAnimal = species.find((element) => element.name === scheduleTarget);
  const getWeekday = arrayWeekdays.reduce((acc, curr, index) => {
    if (scheduleTarget === curr) {
      return index;
    }
    return acc;
  }, null);
  if (getAnimal) {
    return getAnimal.availability;
  }
  if (getWeekday >= 0 && getWeekday < 7 && getWeekday !== null) {
    const result = {
      [Object.keys(weekdays)[getWeekday]]: Object.values(weekdays)[getWeekday],
    };
    return result;
  }
  return weekdays;
}
// console.log(getSchedule('Monday'));
module.exports = getSchedule;

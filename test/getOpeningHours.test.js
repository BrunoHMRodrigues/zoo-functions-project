const getOpeningHours = require('../src/getOpeningHours');

// const daysWeek = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];

const weekTable = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('Confere se pega horários de aberto e fechado', () => {
    expect(getOpeningHours('Tuesday', '10:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Tuesday', '10:00-PM')).toBe('The zoo is closed');
  });

  // it('Confere comportamento quando sigla AM ou PM for errada', () => {
  //  expect(getOpeningHours('Inválido', '10:00-AB')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  // });

  it('Confere comportamento quando for recebido uma string ao invés de uma hora', () => {
   expect(() => getOpeningHours('Tuesday', 'A0:00-AM')).toThrow('The hour should represent a number');
  });

  it('Confere comportamento quando for recebido uma string ao invés dos minutos', () => {
    expect(() => getOpeningHours('Tuesday', '10:A0-AM')).toThrow('The minutes should represent a number');
   });

//   it('Confere comportamento quando for recebido um dia da semana equivocado', () => {
//     expect(() => getOpeningHours('Thu', '10:00-AM')).toThrow('The day must be valid. Example: Monday');
//   });

  it('Confere comportamento quando nenhum parâmetro for inserido', () => {
    expect(getOpeningHours()).toEqual(weekTable);
  });
});

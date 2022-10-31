const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Confere se os parâmetros informados estão corretos', () => {
    expect(handlerElephants('a')).toBe(null);
    expect(handlerElephants()).toBe(undefined);
  });
  const alert = 'Parâmetro inválido, é necessário uma string';
  it('Confere quando parâmetro informado não é uma string', () => {
    expect(handlerElephants(5)).toBe(alert);
    expect(handlerElephants([5, 4])).toBe(alert);
    expect(handlerElephants({ produto: 5 })).toBe(alert);
  });
  it('Confere se os parâmetros informados estão corretos', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});

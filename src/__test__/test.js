import Character from '../character';

test('name more than 10 characters throws an error', () => {
  expect(() => {
    const newCharacter = new Character('xxxDanielDefoexxx');
    newCharacter();
  }).toThrow(/^Некорректная строка!$/);
});

test('name less than 2 characters throws an error', () => {
  expect(() => {
    const newCharacter = new Character('I');
    newCharacter();
  }).toThrow(/^Некорректная строка!$/);
});

test('name from numeric value throws an error', () => {
  expect(() => {
    const newCharacter = new Character(5555);
    newCharacter();
  }).toThrow(/^Некорректная строка!$/);
});

test('wrong type entered', () => {
  expect(() => {
    const newType = new Character('name', 'SwordSinger');
    newType();
  }).toThrow(/^Некорректная строка!$/);
});

/* const nameList = [
  new Character('xxxDanielDefoexxx'),
  new Character('I'),
  new Character(5555),
  new Character('name', 'SwordSinger')
];

const handler = test.each(nameList);
handler('tests that will throw an error') */

test('get object', () => {
  const result = {
    name: 'Dak1',
    type: 'Bowman',
    attack: 20,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(new Character('Dak1', 'Bowman', 20, 40)).toEqual(result);
});

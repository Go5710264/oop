import Character from '../character';

test('name more than 10 characters throws an error', () => {
  expect(() => { Character('xxxDanielDefoexxx'); }).toThrow(/^Некорректная строка!$/);
});

test('name less than 2 characters throws an error', () => {
  expect(() => { Character('I'); }).toThrow(/^Некорректная строка!$/);
});

test('name from numeric value throws an error', () => {
  expect(() => { Character(5555); }).toThrow(/^Некорректная строка!$/);
});

test('wrong type entered', () => {
  expect(() => { Character('name', 'SwordSinger'); }).toThrow(/^Некорректная строка!$/);
});

// const nameList = [
//   new Character('xxxDanielDefoexxx'),
//   new Character('I'),
//   new Character(5555),
//   new Character('name', 'SwordSinger')
// ];

// const handler = test.each(nameList);
// handler('tests that will throw an error')

test('get object', () => {
  const result = {
    name: 'Dak1',
    type: 'Bowman',
    attack: 20,
    defence: 40,
    health: 100,
    level: 1,
  };

  expect(Character('Dak1', 'Bowman', 20, 40)).toEqual(result);
});

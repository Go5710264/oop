import Character from '../character';
import Bowerman from '../bowerman';

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

const result = {
  name: 'Dak1',
  type: 'Bowerman',
  attack: 25,
  defence: 25,
  health: 100,
  level: 1,
};

test('get object', () => {
  expect(new Bowerman('Dak1')).toEqual(result);
});

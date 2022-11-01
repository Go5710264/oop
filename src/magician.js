import Character from './character';

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

const magicianСharacter = new Magician('BM');
console.log(magicianСharacter);

import Character from './character';

class Swordsmaster extends Character {
  constructor(name) {
    super(name, 'Swordsmaster');
    this.attack = 40;
    this.defence = 10;
  }
}

const swordsmasterСharacter = new Swordsmaster('BM');
console.log(swordsmasterСharacter);

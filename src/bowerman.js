import Character from './character';

class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}

const bowermanСharacter = new Bowerman('BM');
console.log(bowermanСharacter);

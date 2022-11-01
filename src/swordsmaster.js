import Character from './character';

class Swordsmaster extends Character {
  constructor(name) {
    super(name, 'Swordsmaster');
    this.attack = 40;
    this.defence = 10;
  }
}

const dak115 = new Swordsmaster('Dak1');
dak115.send();

import Character from './character';

class Swordsmaster extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

const dak115 = new Swordsmaster('Dak1');
dak115.send();

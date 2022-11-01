import Character from './character';

class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}

const dak1 = new Bowerman('Dak1');
dak1.send();

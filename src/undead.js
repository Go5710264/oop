import Character from './character';

class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

const dak11 = new Undead('Dak1');
dak11.send();

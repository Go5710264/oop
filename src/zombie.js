import Character from './character';

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}

const dak117 = new Zombie('Dak1');
dak117.send();

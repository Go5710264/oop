import Character from './character';

class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

const dak122 = new Daemon('Dak1');
dak122.send();

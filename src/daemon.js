import Character from './character';

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

const deamonСharacter = new Daemon('BM');
console.log(deamonСharacter);

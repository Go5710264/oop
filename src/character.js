const typeArray = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type, attack, defence) {
    if (typeof name === 'string' && name.length < 10 && name.length > 2 && typeArray.includes(type)) {
      this.name = name;
      this.type = type;
      this.attack = attack;
      this.defence = defence;
      this.health = 100;
      this.level = 1;
    } else {
      throw new Error('Некорректная строка!');
    }
  }
}

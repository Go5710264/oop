const typeArray = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length < 10 && name.length > 2 && typeArray.includes(type)) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
    } else {
      let error = new Error('Некорректная строка!');
      throw error.message;
    }
  }
}

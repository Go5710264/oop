import './style.css';
import Bowerman from './app.js'

const typeArray = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

class Character {
    constructor(name, type, attack, defence) {
        if(typeof name === "string" && name.length < 10 && name.length > 2 && typeArray.includes(type)) {
            this.name = name;
            this.type = type;
            this.attack = attack;
            this.defence = defence;
        } else {
            throw new Error('Некорректная строка!')
        }
    }
    health = 100;
    level = 1;

    send() {
        console.log(this.name, this.attack, this.health, this.level);
    }
}

// class Bowerman extends Character {
//     constructor(name, type){
//       super(name, type);
//     }
//     attack = 25;
//     defence = 25;
// }

const dak1 = new Bowerman('Dak1');
dak1.send();

class Swordsmaster extends Character {
    
}

class Magician extends Character {
    
}

class Daemon extends Character {
    
}

class Undead extends Character {
    
}

class Zombie extends Character {
    
}

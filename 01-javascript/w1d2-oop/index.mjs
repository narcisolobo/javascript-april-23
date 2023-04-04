/*
  OOP in JavaScript
  4 Pillars of OOP - APIE

  Abstraction
  Polymorphism
  Inheritance
  Encapsulation
*/

class Character {
  // class body
  constructor(name, race, hp = 10, strength = 10) {
    this.name = name;
    this.race = race;
    this.hp = hp;
    this.strength = strength;
    this.xp = 0;
  }

  attack(target) {
    console.log(`${target.name} has been attacked by ${this.name}!`);
    if (target instanceof Character) {
      const damage = this.roll(6);
      // target.hp -= damage;
      return damage;
    } else {
      console.log('Attacks must be on characters.');
    }
  }

  roll(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }

  showStats() {
    console.log(
      `Name: ${this.name}, Race: ${this.race} HP: ${this.hp}, STR: ${this.strength}, XP: ${this.xp}`
    );
  }
}

// Instantiating an object that belongs to the class

/*
  const buzzkill = new Character('Buzzkill', 'Orc', 20);
  const evanWiorek = new Character('Evan Wiorek', 'Half Angel Human', 15)

  console.log(buzzkill);
  console.log(buzzkill.roll(20));
  buzzkill.attack(evanWiorek);
  evanWiorek.showStats();
*/

// Inheritance

export default Character;

import Character from "./index.mjs";

class Barbarian extends Character {
  // class body
  constructor(name, race, hp = 12, strength = 15) {
    super(name, race, hp, strength);
  }

  smite(target) {
    const damage = super.attack(target);
    return damage + 2;
  }
}

export default Barbarian;

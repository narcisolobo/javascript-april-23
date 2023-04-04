import Barbarian from "./barbarian.mjs";

const conan = new Barbarian('Conan', 'Human');
const evan = new Barbarian('Evan', 'Orc');

conan.showStats();
console.log(conan.roll(20));
console.log(conan.smite(evan));
evan.showStats();
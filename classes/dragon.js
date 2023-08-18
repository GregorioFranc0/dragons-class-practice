class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire(name) {
    console.log(`${name} breathes fire everywhere! BURN!!!!`);
  }
  static getDragons(...args) {
    return [dragon.name];
  }

}
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}

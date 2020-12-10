class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
  }
}

class Warrior extends Hero {

  constructor(name, xp, weapon) {
    super(name, xp);

    this.weapon = weapon;
  }


  attack(amount) {
    console.log(`${this.name} attacks with ${this.weapon}`);
    super.gainXp(amount)
  }

  fooBar() {
    console.log('FOOO BAAR');
  }

}

Warrior.prototype.fooBar = function () {
  console.log('FOOO BAAR');
}

const poly = new Warrior('Poly', 200, 'sword');

poly.attack();
poly.gainXp(400);

poly.fooBar();
// distinguishing between types of strings

let unit: string = "awesome";
let miles: "MILES" = "MILES";

type distanceMetric = "MILES" | "KILOMETRES" | "METRES" | "YARDS" | "FEET";

function moveCharacter (distance: number, value: distanceMetric) {
  console.log(`You moved ${distance} ${value}`);
}

// 'dragon will return ts error due wrong type paramater
// moveCharacter(3, 'dragon');
moveCharacter(3, 'METRES');



type thing = string | number | string[] | boolean;

let returnString = (someThing: thing) => {
  if (someThing instanceof Array) {
    let joinedthings = "";
    someThing.forEach((thing) => {
      joinedthings += ` ${thing}`
    });
  }
}

// INTERFACES //
interface IAttackFunction {
  (opponent: {alias: string, health: number;}, attackWith: number): number
}
interface IOptionalAttributes {
  strength?: number;
  insanity?: number;
  dexterity?: number;
  healingFactor?: number;
}

interface IComicBookCharacter extends IOptionalAttributes {
  secretIdentity?: string;
  alias: string;
  health: number;
  attack: IAttackFunction;
}


function attackFunction(opponent, attackWith)  {
  opponent.health -= attackWith;
  console.log(`${this.alias} attacked ${opponent.alias}, who's health = ${opponent.health}`)
  return opponent.health;
}

let superhero: IComicBookCharacter = {
  alias : "She Hulk",
  health: 5000,
  attack: attackFunction,
  strength: 32
}

let superVillain: IComicBookCharacter = {
  secretIdentity: "Jack Napier",
  alias: "Joker",
  health: 3000,
  attack: attackFunction
}


superhero.attack(superVillain, superhero.strength)

class ComicBkCharacter {
  constructor(
    public alias: string, public health: number , public strength: number,
    protected secretIdentity: string
  ) {}

}

class SuperHero extends ComicBkCharacter { 
  traits = ["empathy", "strong moral code"];
  getSecretId() { console.log(this.secretIdentity); }
}

class SuperVillain extends ComicBkCharacter {
  
  flaws = ["hubris", "always explains evil plan"];
  
  constructor(a, b, c, d) {
    super(a, b, c, d);
    console.log('${this.alias} eats kittens!!!');
    
  } 
}

let jubilee = new SuperHero("Jubilee", 23, 233, "Jubilation Lee");
let scarletWitch = new SuperVillain("Scarlet Witch", 233, 4444, "Wanda Maximoff");

console.log(jubilee.getSecretId())



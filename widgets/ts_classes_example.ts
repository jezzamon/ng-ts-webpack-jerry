interface IOpponent {
  alias: string;
  health: number;
}

class ComicBookCharacter {
  private team: {
    name: string,
    members: ComicBookCharacter[]
  }
  constructor(
    public alias: string, public health: number, public strength: number, 
    private secretIdentity: string
  ) {}

  attackFunc(opponent, attackWith: number) {
    opponent.health -= 100;

    console.log(`${this.alias} attacked ${opponent.alias} who's health = ${opponent.strength}`);

  }

  getSecretIdentity() {
    console.log(`Secret identity is ${this.secretIdentity}`)
  }

  // only referenced from the Class no instance of Class (see line 50)
  static createAndAssignTeam(teamname: string, members: ComicBookCharacter[]) {
    let team =  {
      name: teamname,
      members: members
    };

    members.forEach((member) => {
      member.team = team;
    });
  }

  getTeamName() {
    console.log(`${this.alias} is on Team ${this.team.name}`);
  }
}

let storm = new ComicBookCharacter("Storm", 100, 100, "Monroe Man");
storm.getSecretIdentity();

let jade = new ComicBookCharacter("Jade", 100, 100, "Monroe Man");
storm.getSecretIdentity();

let team = ComicBookCharacter.createAndAssignTeam('odd couple', [storm, jade])


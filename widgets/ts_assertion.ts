interface SuperHero {
  powers: string[];
  savesTheDay: () => void;
}

interface BadGuy {
  badDeeds: string[];
  getRandomBadDeed: () => string;
  commitBadDeed: () => void;
}

function saveDayOrBadDeed(something: SuperHero | BadGuy) {
  // if (something.powers) {} // this will return an error because BadGuy type does not have powers property
  
  // us 'as' for type assertion
  if ((something as SuperHero).powers) {}

  // angle bracket syntax - DOES NOT WORK WITH REACT use 'as' type assertion instead
  if ((<SuperHero>something).powers) {} // angle bracket syntax
}
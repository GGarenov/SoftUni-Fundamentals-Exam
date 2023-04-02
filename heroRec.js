function heroes(input) {
  let heroes = {};

  for (let line of input) {
    let [command, heroName, spellName] = line.split(" ");

    if (command === "Enroll") {
      if (!heroes.hasOwnProperty(heroName)) {
        heroes[heroName] = [];
      } else {
        console.log(`${heroName} is already enrolled.`);
      }
    } else if (command === "Learn") {
      if (heroes.hasOwnProperty(heroName)) {
        if (!heroes[heroName].includes(spellName)) {
          heroes[heroName].push(spellName);
        } else {
          console.log(`${heroName} has already learnt ${spellName}.`);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
    } else if (command === "Unlearn") {
      if (heroes.hasOwnProperty(heroName)) {
        if (heroes[heroName].includes(spellName)) {
          let spellIndex = heroes[heroName].indexOf(spellName);
          heroes[heroName].splice(spellIndex, 1);
        } else {
          console.log(`${heroName} doesn't know ${spellName}.`);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
    } else if (command === "End") {
      let sortedHeroes = Object.keys(heroes).sort((a, b) => a.localeCompare(b)).reverse();
      console.log("Heroes:");
      for (let hero of sortedHeroes) {
        let spells = heroes[hero].join(", ");
        console.log(`== ${hero}: ${spells}`);
      }
    }
  }
}
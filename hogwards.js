function solve(input) {
  let spell = input.shift();

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(" ");

    if (tokens[0] === "Abjuration") {
      spell = spell.toUpperCase();
      console.log(spell);
    } else if (tokens[0] === "Necromancy") {
      spell = spell.toLowerCase();
      console.log(spell);
    } else if (tokens[0] === "Illusion") {
      let index = Number(tokens[1]);
      let letter = tokens[2];

      if (index < 0 || index >= spell.length) {
        console.log("The spell was too weak.");
      } else {
        spell = spell.substring(0, index) + letter + spell.substring(index + 1);
        console.log("Done!");
      }
    } else if (tokens[0] === "Divination") {
      let firstSubstring = tokens[1];
      let secondSubstring = tokens[2];

      if (spell.indexOf(firstSubstring) !== -1) {
        spell = spell.split(firstSubstring).join(secondSubstring);
        console.log(spell);
      }
    } else if (tokens[0] === "Alteration") {
      let substring = tokens[1];

      if (spell.indexOf(substring) !== -1) {
        spell = spell.split(substring).join("");
        console.log(spell);
      }
    } else if (tokens[0] === "Abracadabra") {
      break;
    } else {
      console.log("The spell did not work!");
    }
  }
}
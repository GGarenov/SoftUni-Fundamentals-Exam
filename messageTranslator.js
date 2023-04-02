function messageTranslator(input) {
  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let message = input[i];
    let pattern = /^!(?<command>[A-Z][a-z]{2,})!:\[(?<text>[A-Za-z]{8,})\]$/;
    let match = pattern.exec(message);

    if (match) {
      let command = match.groups.command;
      let text = match.groups.text;
      let output = "";

      for (let j = 0; j < text.length; j++) {
        output += `${text.charCodeAt(j)} `;
      }

      console.log(`${command}: ${output.trim()}`);
    } else {
      console.log("The message is invalid");
    }
  }
}
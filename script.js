
const extendHex = (shortHex) => {
  shortHex = shortHex.replace("#", ""); // Remove # if present
  let fullHex = "#";
  for (let i = 0; i < shortHex.length; i++) {
    fullHex += shortHex[i].repeat(2); // Repeat each character twice
  }
  return fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
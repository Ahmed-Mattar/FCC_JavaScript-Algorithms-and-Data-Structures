class CaesarsCipher {
  private static readonly CHARACTERS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  /**
   * Returns the letters shifted by 13 places.
   *
   * @param encoded
   * @returns decoded value
   */
  static rot13(encoded: string): string {
    let decoded = "";

    for (let ch of encoded) {
      let postion = this.CHARACTERS.indexOf(ch);

      if (postion !== -1) {
        postion = (postion + 13) % 26;
        decoded += this.CHARACTERS[postion];
      } else {
        decoded += ch;
      }
    }

    return decoded;
  }
}

console.log(
  CaesarsCipher.rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
);

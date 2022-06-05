class RomanNumeralConverter {
  private static readonly BASE_NUMBERS: [string, number][] = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  static convert(number: number): string {
    if (number < 0 || number > 3999) return "";

    let place_value = 0;

    let roman = "";

    while (number !== 0) {
      if (number >= this.BASE_NUMBERS[place_value][1]) {
        roman += this.BASE_NUMBERS[place_value][0];
        number -= this.BASE_NUMBERS[place_value][1];
      } else {
        if (place_value < this.BASE_NUMBERS.length) place_value++;
      }
    }

    return roman;
  }
}

//console.log(RomanNumeralConverter.convert(3999));

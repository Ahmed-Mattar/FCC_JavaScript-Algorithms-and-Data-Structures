class PalindromChecker {
  private static removeNonAlphaNumeric(string: string) {
    return string.replace(/[^a-z0-9]+/gi, "");
  }

  private static toAllLower(string: string) {
    return string.toLowerCase();
  }

  static isPalindrom(string: string) {
    string = this.removeNonAlphaNumeric(string);
    string = this.toAllLower(string);

    let pointer1 = 0;
    let pointer2 = string.length - 1;

    while (pointer1 < pointer2) {
      if (string[pointer1] === string[pointer2]) {
        pointer1++;
        pointer2--;
        continue;
      } else {
        return false;
      }
    }

    return true;
  }
}

let result = PalindromChecker.isPalindrom("0_0 (: /- :) 0-0");
console.log(result);

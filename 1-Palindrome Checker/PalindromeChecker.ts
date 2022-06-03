class PalindromChecker {
  string: string;

  constructor(string: string) {
    this.string = string;
  }

  private removeNonAlphaNumeric() {
    return (this.string = this.string.replace(/[^a-z0-9]+/gi, ""));
  }

  private toAllLower() {
    this.string = this.string.toLowerCase();
  }

  isPalindrom() {
    this.removeNonAlphaNumeric();
    this.toAllLower();

    let pointer1 = 0;
    let pointer2 = this.string.length - 1;

    while (pointer1 < pointer2) {
      if (this.string[pointer1] === this.string[pointer2]) {
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

let result = new PalindromChecker("not a palindrome").isPalindrom();
console.log(result);

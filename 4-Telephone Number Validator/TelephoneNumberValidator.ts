class TelephoneNumberValidator {
  /**
   *
   * @param phone_number
   * @returns true if phone_number is valid otherwise false
   */

  static telephoneCheck(phone_number: string): boolean {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(phone_number);
  }
}

console.log(TelephoneNumberValidator.telephoneCheck("1 (555) 555-5555"));

export class FormValidator {
  constructor(
    name,
    username,
    email,
    password,
    confirmPassword,
    image,
    termsAndCondtionAccepted
  ) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.image = image;
    this.termsAndCondtionAccepted = termsAndCondtionAccepted;
    this.message = [];
  }

  #checkUsername() {
    const username = this.username.trim();
    if (username.includes(' ')) {
      this.message.push('Spaces are not accepted in username!');
    }
  }

  #termsAndCondtionAccepted() {
    if (!this.termsAndCondtionAccepted)
      this.message.push('Terms and condition must be accepted!');
  }

  #checkOnlyText() {
    if (!/^[a-zA-Z\s]*$/.test(`${this.name}`)) {
      this.message.push('Only text is allowed for a Name!');
    }
  }

  #checkPassword() {
    if (this.password.length < 8) {
      this.message.push('Password must contain atleast 8 characters!');
    }
  }

  #checkEmptyField() {
    [
      this.name,
      this.email,
      this.password,
      this.confirmPassword,
      this.image,
    ].forEach((input) => {
      if (
        input === '' &&
        this.message[this.message.length - 1] !== `All Fields must be fillled!`
      ) {
        this.message[this.message.length] = `All Fields must be fillled!`;
      }
    });
  }

  #confirmPassword() {
    if (this.password !== this.confirmPassword) {
      this.message.push('The password confirmation does not match!');
    }
  }

  validate() {
    this.#checkUsername();
    this.#checkOnlyText();
    this.#checkPassword();
    this.#checkEmptyField();
    this.#confirmPassword();
    this.#termsAndCondtionAccepted();

    if (this.message.length > 0) {
      return false;
    }
    return true;
  }
}

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}habibi`;
  }
  set password(value) {
    this._password = value;
  }
}

const ahsan = new User("ah@san.com", "abc");
console.log(ahsan.email);

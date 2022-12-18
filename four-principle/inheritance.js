class User {
  constructor(name, email, password, age) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
  }

  login(email, password) {
    console.log('You are now logged in as a user')
  }
}

class Student extends User {
  constructor(name, email, password, age, userType) {
    super(name, email, password, age);
    this.userType = userType || 'student';
  }
}

const nancy = new Student('Nancy', 'nancy@gmail.com', 'livinus', 2);

nancy.login('email', 'password')
console.log(nancy)

class Tutor extends User {
  constructor(name, email, password, age, userType) {
    super(name, email, password, age);
    this.userType = userType || 'tutor';
  }
}

const livinus = new Tutor('Livinus', 'email', 'nancy', 2)
console.log(livinus)
livinus.login('email', 'password')

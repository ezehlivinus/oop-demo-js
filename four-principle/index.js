class Student {
  constructor(name, email, password, age) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
  }

  login(email, password) {
    console.log('You are now logged in as student')
  }
}

const livinus = new Student('Livinus', 'ezehlivinus@gmail.com', 'nancy', 12);

console.log(livinus)

class Tutor {
  constructor(name, email, password, age) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
  }

  login(email, password) {
    console.log('You are now logged in as a tutor')
  }
}

const tutor = new Tutor('Nancy', 'nancy@gmail.com', 'livinus', 2);

console.log(tutor)
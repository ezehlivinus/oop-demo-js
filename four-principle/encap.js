// 
class AbstractUser {
  constructor(name, email, password, age) {
    if (this.constructor.name === 'User') {
      throw new Error('This is an abstract class and cannot be instantiated')
    }
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
  }

  login(email, password) {
    throw new Error('This is an abstract method and not be called directly')
  }
}


class Student extends AbstractUser {
  constructor(name, email, password, age, userType) {
    super(name, email, password, age);

    this.userType = userType || 'student';
  }

  login() {
    this.#verifyPassword()
    console.log('You are now logged in')
  }

  #verifyPassword() {
    // const password = this.password || 'password';
    console.log('your password is correct ')
  }
}

const u = new Student()

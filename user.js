class Person {
  static className = 'Person';

  #accountBalance;
  constructor(name, accountBalance) {
    this.name = name;
    this.#accountBalance = accountBalance;
  }

  get accountBalance() {
    return this.#accountBalance;
  }

  set accountBalance(balance) {
    this.#accountBalance = balance;
  }

  static findAll() {
    return [{ name: 'kkk'  }, {  }, {  }, 'p4', 'p5']; 
  }

  findByEmail(email) {

  }

  static findOne() {
    
  }
}

const livinus = new Person('Livinus', 200)

console.log(livinus)
console.log(livinus.accountBalance, livinus.name)
livinus.accountBalance = 4000 //setter
console.log(livinus.accountBalance, livinus.name)
console.log(Person.className)

Person.className = 'HumanPerson'
console.log(Person.findAll())

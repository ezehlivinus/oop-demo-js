class Dog {
  constructor(name, age) {
    this.name = name; // instance => object
    this.age = age;
    // this.numberOfLegs = 4
  }

  bark () {
    console.log(this.name, 'is barking')
  }

  setName(name) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
}

const jark = new Dog('Jark', 10) // instantiating a new instance
const bingo = new Dog('Bingo', 10)
const mark = new Dog('Mark', 10)

jark.bark()
bingo.bark()
mark.bark()

console.log(jark.age)
console.log(bingo)
console.log(mark)

mark.setName('MarkMA')

console.log(mark.getAge(), bingo.getAge())

if ( mark.getAge() < 14) {
  console.log('you are not q')
} else {
  console.log('You have bee moved to the next stage C')
}

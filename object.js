const jack = {
  name: 'jack',
  age: 20,
  numberLegs: 4,

  bark() {
    console.log('I am barking')
  }
}

const bingo = {
  name: 'bing0',
  age: 354,
  numberLegs: 4,

  bark() {
    console.log('I am barking')
  }
}

const mark = {
  name: 'mark',

  numberLegs: 4,

  bark() {
    console.log('I am barking')
  }
}

const nancy = {
  firstName: 'Nancy',
  lastName: 'Okeke',
  school: 'UNN',
  department: 'Economics',
  complexion: 'fair',
  canTalk: true,
  canCry: true,
  isLoveable: true,
  age: 21,
  hasNiceVoice: true,

  walk() {
    console.log('Nancy is walking')
  }
}

console.log(nancy)
nancy.department = 'JavaScript'
console.log(nancy)
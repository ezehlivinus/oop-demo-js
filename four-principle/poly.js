class Shape {
  constructor() {
    if (this.constructor.name === 'Shape') {
      throw new Error('Error nnnn')
    }
  }

  area() {
    throw new Error('Error can call')
  }

}

class Circle extends Shape {

  area(radius) {
    console.log(Math.PI * (radius **2) )
  }
}

class Square extends Shape {

  area(length) {
    console.log('The area of this sqaure is:', length * length )
  }
}

class Trapezium extends Shape {

  area(a, b, h) {
    const result = ((a + b) / 2) * h
    console.log('Trapezuim ', result)
  }
}

const circle = new Circle()
const s = new Square()
const t = new Trapezium()

console.log(s.area(4), circle.area(2), t.area(2, 4, 7))


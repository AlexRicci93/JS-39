class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  
 static calculate(shape) {
  if (shape === square ) {
     return square.side * square.side;
  }
  if (shape === rectangle) {
     return rectangle.width * rectangle.height;
  }
  if (shape === circle) {
     return (circle.radius ** 2) * 3.14;
  }
 }
 

 
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
//class is a template for creating objects

class Car {
  constructor(make,model,year,color) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color

  }
}
//new instance has the attributes of the class created
let car1 = new Car('Ferrari', 'Spider', 2000, 'Red')

console.log(car1.year);

let car2 = new Car('Nissan', '300zx', 1990, 'Gold')

console.log(car2)
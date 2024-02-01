"use strict";
// . Implement a custom inheritance mechanism in TypeScript using prototypes. Create a base class Shape with
// properties and methods, and then extend it to create derived classes like Circle and Rectangle.
// 2. Develop a TypeScript code snippet for a frontend component that handles user input. Implement measures
// to prevent common security vulnerabilities, such as input sanitization to prevent XSS and anti-CSRF tokens.
// 3. Create a TypeScript implementation of the Singleton pattern for a logging service. Ensure that only one
// instance of the logger exists across the application. Additionally, design a Factory pattern to create different
// types of loggers (e.g., FileLogger, ConsoleLogger) based on user preferences
class Shape {
    constructor(radius, width, length) {
        this.radius = radius;
        this.width = width;
        this.length = length;
    }
    showRadius() { }
    showArea() { }
}
class Circle extends Shape {
    // public let pi:number = Math.PI; 
    showRadius() {
        return 3.14 * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    showArea() {
        return this.width * this.length;
    }
}
// let obj = new Shape(10,20,15);
let rect = new Rectangle(10, 20, 15);
let circ = new Circle(10, 20, 15);
let rectArea = rect.showArea();
let circArea = circ.showRadius();
console.log(rectArea);
console.log(circArea);
//# sourceMappingURL=Shapes.js.map
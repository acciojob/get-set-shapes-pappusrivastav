// //complete this code
// class Rectangle {}

// class Square extends Animal {}

// // Do not change the code below this line
// window.Rectangle = Rectangle;
// window.Square = Square;
// Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

// Square class (subclass of Rectangle)
class Square extends Rectangle {
  getPerimeter() {
    return 4 * this.width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

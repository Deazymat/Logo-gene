//  `constructor` method takes four parameters (`threeLetters`, `shape`, `shapeColor`, `textColor`) and assigns them to properties on the `Shape` object. The `makeLogo` method then uses these properties to create a string.

class Shape {
  constructor(threeLetters, shape, shapeColor, textColor) {
    this.threeLetters = threeLetters;
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  makeLogo() {
    return `${this.threeLetters} - ${this.shape} - ${this.shapeColor} - ${this.textColor}`;
  }
}

module.exports = Shape;

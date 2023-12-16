// Shape class
class Shape {
  constructor(color) {
     if (!color) throw new Error("Color is required");
        this.color = color;
  }

  setColor(color) {
     if (!color) throw new Error("Color is required");
    this.color = color;
  }
}

// Triangle class
class Triangle extends Shape {
  constructor(color, points = "150,18 244,182 56,182") {
    super(color);
    this.points = points;
  }

  render() {
    return `<polygon points="${this.points}" fill="${this.color}" />`;
  }
}

// Circle class
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Square class
class Square extends Shape {
  constructor(color, cx = 150, cy = 100, r = 80) {
    super(color);
    this.cx = cx;
    this.cy = cy;
    this.r = r;
  }
  render() {
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };

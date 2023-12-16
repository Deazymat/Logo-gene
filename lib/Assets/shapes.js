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
  constructor(color, x = 50, y = 50, width = 80, height = 80) {
    super(color);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };

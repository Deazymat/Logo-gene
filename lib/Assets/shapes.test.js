const { Triangle, Circle, Square } = require("./shapes");

test("Triangle render method returns correct SVG string", () => {
  const shape = new Triangle("blue");
  expect(shape.render()).toEqual(
    '<polygon points="150,18 244,182 56,182" fill="blue" />'
  );
});


test("Circle render method returns correct SVG string", () => {
  const shape = new Circle("red", 150, 100, 80);
  expect(shape.render()).toEqual(
    '<circle cx="150" cy="100" r="80" fill="red" />'
  );
});


test("Square render method returns correct SVG string", () => {
  const shape = new Square("green", 50, 50, 80, 80);
  expect(shape.render()).toEqual(
    '<rect x="50" y="50" width="80" height="80" fill="green" />'
  );
});
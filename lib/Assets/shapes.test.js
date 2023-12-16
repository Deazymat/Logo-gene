const { Triangle, Circle, Square } = require("./shapes");

test("Triangle render method returns correct SVG string", () => {
  const shape = new Triangle("blue");
  expect(shape.render()).toEqual(
    '<polygon points="150,18 244,182 56,182" fill="blue" />'
  );
});
test("Circle render method returns correct SVG string", () => {
  const shape = new Circle("red");
  expect(shape.render()).toEqual(
    '<circle cx="100" cy="100" r="100" fill="red" />'
  );
});

test("Square render method returns correct SVG string", () => {
  const shape = new Square("green");
  expect(shape.render()).toEqual(
    '<rect width="200" height="200" fill="green" />'
  );
});
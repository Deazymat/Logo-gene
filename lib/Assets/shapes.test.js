const { Triangle, Circle, Square } = require("./shapes");

test("Triangle render method returns correct SVG string", () => {
  const shape = new Triangle("blue");
  expect(shape.render()).toEqual(
    '<polygon points="150,18 244,182 56,182" fill="blue" />'
  );
});

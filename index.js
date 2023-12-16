const CLI = require('./lib/cli');
const Shape = require('./lib/shape');
const fs = require('fs/promises');

async function main() {
    try {
        const cli = new CLI();
        const userInput = await cli.run();
        const shape = new Shape(
          userInput.threeLetters,
          userInput.textColor,
          userInput.shape,
          userInput.shapeColor
        );
           const logo = shape.makeLogo();
        
        
          await fs.writeFile('./logo.svg', logo);
    console.log("Generated logo.svg");
  } catch (error) {
    console.error(error.message);
    }
}

main();
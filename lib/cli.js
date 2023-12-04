const inquirer = require('inquirer');

// Defining the choices for the user to choose from
const SHAPE_CHOICES = ['square', 'circle', 'triangle'];
const COLOR_CHOICES = ['red', 'green', 'blue'];
const TEXT_COLOR_CHOICES = ['red', 'green', 'blue', 'white', 'black'];

// Defining the default values for the user to choose from
class CLI {
    constructor() {
        this.threeLetters = "";
        this.shape = "";
        this.shapeColor = "";
        this.textColor = "";
    }
    //  Defining the run function to prompt the user for the input
    async run() {
        try {
            this.threeLetters = await this.promptUser(
                "What are the 3 letters you want to use?",
                "input",
                "text",
                "",
                this.validateThreeLetters.bind(this)
            );
            this.shape = await this.promptUser(
                "What shape do to you want to use?",
                "list",
                "shape",
                SHAPE_CHOICES
            );
            this.shapeColor = await this.promptUser(
                "What color do you want to use for the shape?",
                "list",
                "shapeColor",
                COLOR_CHOICES
            );
            this.textColor = await this.promptUser(
                "What color do you want to use for the text?",
                "list",
                "textColor",
                TEXT_COLOR_CHOICES
            );
            return this;
        } catch (error) {
            console.error(`error happened please try again: ${error.message}`);
        }
    }
    //  Defining the promptUser function to prompt the user for the input
    async promptUser(message, type, name, choices = [], validate = null) {
        const response = await inquirer.prompt([
            {
                name: name,
                type: type,
                message: message,
                validate: validate,
                choices: choices,
                default: defaultValue,
            },
        ]);
        return response[name];
    }
    //  Defining the validateThreeLetters function to validate the user input
    validateThreeLetters(input) {
        if (input.length === 0) {
            return "logo text should only contain up to 3 letters";
        } else if (input.length > 3) {
            return "cannot be more than 3 letters";
        } else if (!/^[A-Za-z]+$/.test(input)) {
            return "Please enter letters only";
        }
        return true;
    }
}

module.exports = CLI;
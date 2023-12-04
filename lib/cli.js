const inquirer = require('inquirer'); 

const SHAPE_CHOICES = ['square', 'circle', 'triangle'];
const COLOR_CHOICES = ['red', 'green', 'blue'];


class CLI {
  constructor() {
    this.threeLetters = '';
    this.shape = '';
    this.shapeColor = '';
    this.textColor = '';
    }

async run() {
    try {
      this.threeLetters = await this.promtUser("    ");
        this.shape = await this.promtUser(" ");
        this.shapeColor = await this.promtUser("    ");
        this.textColor = await this.promtUser(" ");
        return this;
 } catch (error) {
      console.error(`error happened please try again: ${error.message}`);
    }
}

async promtUser() {
}
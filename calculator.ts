#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import { type } from "os";
import Choices from "inquirer/lib/objects/choices.js";

const sleep = () => {    // this command is use to stop rainbow code
  return new Promise((resolve) => {
    setTimeout(resolve, 3000); 
  })
}


async function wellcome() {
  let rainbowTitle = chalkanimation.rainbow('Let start calculaton now'); // starts animation
  await sleep();
  rainbowTitle.stop(); // to stop animation // stop after 3 sec


  console.log( chalk.bgBlueBright
             
(`  _____________________
  |  _________________  |
  | | JO           0. | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________| `));
 // take this calculator from ascii.co.uk calculator
   // put this is bactstraps 
}

await wellcome()  // jab tak ya execute na ho tu agay ki functionality execute na hoo

async function askquestions() {

  const answers = await inquirer
    .prompt([
      /* Pass your questions in here */
      {
        name: "operator",
        message:"which option you want to perform? \n",
        type: "list",// question list ma aayain gay
        choices:["Addition", "Substraction", "Multiplication", "Division","Power"]
      },
      {
        name: "num1",
        type: "number",
        message: "enter number 1 : "
      },
      {
        name: "num2",
        type: "number",
        message: "enter number 2 : "
      }
    ]);
    
    // console.log(answers.operator)

// we can also use then here if we want

// this code is for main functionality i.e actually what we want to do

      if
       (answers.operator == "Addition") {
        console.log(chalk.red(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
      }

      else if
       (answers.operator == "Substraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
      }

      else if
       (answers.operator == "Multiplication") {
        console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
      }

      else if
       (answers.operator == "Division") {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
      }
      else if
      (answers.operator == "Power") {
       console.log(chalk.green(`${answers.num1} * ${answers.num1} = ${answers.num1 * answers.num1}`));
     }
    };


 // await askquestions()

// this functionality ask the user if you want to recalculate 

async function startagain() {
  do {
await askquestions();  // call the ask questionftn here so that the above are repeats here
    var again = await inquirer
      .prompt({
      
        name: "restart",
        message: "do you want to continue? Pyress y or n: ",
        type: "input"  // because we want the string
      })
  } while (again.restart == 'y' || again.restart == 'yes' || again.restart == 'Y' || again.restart == 'YES');

};


startagain()

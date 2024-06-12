#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgBlueBright("\n\t<<<<< Wellcome To The FaizCode Word-Counter App >>>>>\n"));
console.log(`\t\t                  ______      ______   `);
console.log(`\t\t||   __   ||     ||          ||    ||  `);
console.log(`\t\t||  =  =  ||     ||          ||____||  `);
console.log(`\t\t||=      =||  :: ||_____  :: ||    ||  `);
console.log(chalk.bold.magenta(`\n\t\t    WORD       -  COUNTER  -    APP\n`));
let myloop = true;
while (myloop) {
    let UserInput = await inquirer.prompt([
        {
            type: "input",
            name: "para",
            message: "Enter Your Paragraph To Count Letters And Words In It !",
        },
        {
            type: "list",
            name: "ask",
            message: "What Do You Want To Count In Your Paragraph ?",
            choices: ["1.Letters", "2.Words", "3.Both Letters And Words"],
        },
    ]);
    let { para, ask } = UserInput;
    if (para.length === 0)
        emptyInput();
    if (ask === "1.Letters")
        letterFun();
    if (ask === "2.Words")
        wordsFun();
    if (ask === "3.Both Letters And Words")
        both();
    function emptyInput() {
        console.log(chalk.red(`\nYour Input Is Empty! Please Try Again With A Valid Input\n`));
    }
    function letterFun() {
        let letterSwitchoutSpaces = para.replace(/\s/g, "");
        let letterCount = letterSwitchoutSpaces.length;
        console.log(chalk.greenBright(`\nTotal Letters In Your paragraph Are "${letterCount}"\n`));
    }
    function wordsFun() {
        let wordsArray = para.split(" "); //array me show hoga.
        let wordsCount = wordsArray.length;
        console.log(chalk.yellow(`\ntotal Words In Your Paragraph Are "${wordsCount}"\n`));
    }
    function both() {
        letterFun();
        wordsFun();
    }
    let countMore = await inquirer.prompt([
        {
            type: "confirm",
            name: "more",
            message: "Do You Want To Count More ?",
            default: false,
        },
    ]);
    if (!countMore.more) {
        myloop = false;
        console.log(chalk.yellow(`\nThank You For Using Word Counter App.`));
    }
}

import inquirer from "inquirer"

const userInput : {
    para : string} = await inquirer .prompt([
    {
        type: "input",
        name: "para",
        message: "Enter Text to count the words :"
    },
    
])

let words = userInput.para.trim().split(" ")
console.log(`Your word count is ${words.length}`);
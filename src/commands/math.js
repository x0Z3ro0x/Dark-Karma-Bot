const { prefix } = require("../config/server.config");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "math",
    description: "A command for doing basic math calculations",

    async execute(msg, args) {
        if (args.length < 3) {
            await msg.channel.send(`Usage: \`${prefix}math number operator number\` Example: \`${prefix}math 5 + 2\``);
            return;
        }

        const firstNumber = Number(args[0]);
        const operator = args[1];
        const secondNumber = Number(args[2]);

        if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
            await msg.channel.send("Both values need to be valid numbers.");
            return;
        }

        let calculation;

        if (operator === "+") {
            calculation = firstNumber + secondNumber;
        } else if (operator === "-") {
            calculation = firstNumber - secondNumber;
        } else if (operator === "/") {
            if (secondNumber === 0) {
                await msg.channel.send("You cannot divide by zero. Even rage-bot has standards.");
                return;
            }

            calculation = firstNumber / secondNumber;
        } else if (operator === "*") {
            calculation = firstNumber * secondNumber;
        } else if (operator === "^") {
            calculation = firstNumber ** secondNumber;
        } else {
            await msg.channel.send("Supported operators are: `+`, `-`, `/`, `*`, `^`");
            return;
        }

        await msg.channel.send(`${firstNumber} ${operator} ${secondNumber} = ${calculation}`);

        await logCommandUsage(msg, `${prefix}math`);
    }
};
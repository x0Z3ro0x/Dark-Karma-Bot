const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "math",
    description: "A command for doing basic math calculations",
    execute(msg, args) {
        var args2 = msg.content.split(" ");
        var isNumber = Number(args2[1]);
        var isNumber2 = Number(args2[3]);
        var operator = args2[2];

        if (operator === "+") {
            var calculation = isNumber + isNumber2;
            msg.channel.send(isNumber + " + " + isNumber2 + " = " + calculation);
        }
        else if (operator === "-") {
            var calculation = isNumber - isNumber2;
            msg.channel.send(isNumber + " - " + isNumber2 + " = " + calculation);
        }
        else if (operator === "/") {
            var calculation = isNumber / isNumber2;
            msg.channel.send(isNumber + " / " + isNumber2 + " = " + calculation);
        }
        else if (operator === "*") {
            var calculation = isNumber * isNumber2;
            msg.channel.send(isNumber + " * " + isNumber2 + " = " + calculation);
        }
        else if (operator === "^") {
            var calculation = isNumber ** isNumber2;
            msg.channel.send(isNumber + " ^ " + isNumber2 + " = " + calculation);
        }
    }
};
const cowsay = require("cowsay");
const insp = require("inspirational-quotes");
console.log(
    cowsay.say({
        text:insp.getQuote().text,
        e: "JANU",
        T:"U"
    })
);
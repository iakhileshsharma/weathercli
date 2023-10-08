const weather = require("./weather");

const CityName = process.argv.slice(2).join(" ");

// console.log(CityName);

weather(CityName);
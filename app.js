// app.js
// Demonstrates reusing the custom isEven and logger modules

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger.log("Starting module reusability demo...");

const numbers = [4, 7, 10, 15, 22];

numbers.forEach((num) => {
  try {
    const result = isEven(num) ? "Even" : "Odd";
    logger.log(`${num} is ${result}`);
  } catch (err) {
    logger.error(err.message);
  }
});

logger.log("Demo finished.");

// Run this file with: node app.js

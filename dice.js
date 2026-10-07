// dice.js
// A random dice generator using the "crypto" module for secure randomness

const crypto = require("crypto");
const fs = require("fs");
const logger = require("./modules/logger");

// Generates a secure random integer between 1 and 6
function rollDice() {
  // crypto.randomInt(min, max) -> max is exclusive, so we use 7
  return crypto.randomInt(1, 7);
}

// Bonus: save roll history to a text file
function saveHistory(value) {
  const line = `Dice Rolled: ${value} at ${new Date().toLocaleString()}\n`;
  fs.appendFile("./dice_history.txt", line, (err) => {
    if (err) {
      logger.error(`Could not save dice history: ${err.message}`);
    }
  });
}

// Simulate multiple dice rolls
const numberOfRolls = 5;

console.log(`Rolling the dice ${numberOfRolls} times...\n`);

for (let i = 1; i <= numberOfRolls; i++) {
  const value = rollDice();
  console.log(`Roll ${i}: Dice Rolled: ${value}`);
  saveHistory(value);
}

// Run with: node dice.js

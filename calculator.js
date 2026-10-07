// calculator.js
// A simple CLI-based calculator using process.argv
// Usage: node calculator.js <operation> <num1> <num2>
// Example: node calculator.js add 10 5

// process.argv looks like:
// [0] -> path to node executable
// [1] -> path to this script
// [2] -> operation
// [3] -> num1
// [4] -> num2

const args = process.argv.slice(2);

if (args.length < 3) {
  console.log("❌ Invalid usage!");
  console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
  process.exit(1);
}

const operation = args[0].toLowerCase();
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("❌ Error: Please provide valid numbers.");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    if (num2 === 0) {
      console.log("❌ Error: Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log(`❌ Invalid operation: "${operation}"`);
    console.log("Supported operations: add, sub, mul, div");
    process.exit(1);
}

console.log(`Result: ${result}`);

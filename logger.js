// modules/logger.js
// A custom logger module to demonstrate module creation & reuse
// Bonus: includes timestamp in every log message

function log(message) {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] ${message}`);
}

function error(message) {
  const timestamp = new Date().toLocaleString();
  console.error(`[${timestamp}] ❌ ERROR: ${message}`);
}

// Export multiple functions using an object
module.exports = { log, error };

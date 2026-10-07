# Smart Utility Toolkit

A Node.js lab project built using only core modules (`process`, `http`, `fs`, `crypto`) — no external packages or frameworks.

## Project Structure

```
smart-utility-toolkit/
├── calculator.js
├── app.js
├── server.js
├── fileManager.js
├── dice.js
├── test.txt
├── modules/
│   ├── isEven.js
│   └── logger.js
└── README.md
```

## How to Run Each Part

### 1. CLI Calculator
```
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5
```

### 2. Custom Module Demo (isEven + logger)
```
node app.js
```

### 3. HTTP Server
```
node server.js
```
Then visit in browser or Postman:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/random-url (404)

### 4. File Manager (CRUD with fs)
```
node fileManager.js
```
Creates, reads, updates, and deletes `test.txt`, logging each step.

### 5. Dice Generator (crypto)
```
node dice.js
```
Rolls a secure random dice 5 times and saves history to `dice_history.txt`.

## Notes
- All randomness uses `crypto.randomInt()` instead of `Math.random()` for cryptographically secure values.
- The `logger` module timestamps every log line (bonus feature).
- Errors (invalid operations, missing files, division by zero) are handled gracefully.

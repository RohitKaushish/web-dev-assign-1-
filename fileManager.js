// fileManager.js
// A simple file manager demonstrating CRUD operations using the "fs" module

const fs = require("fs");
const logger = require("./modules/logger");

const filePath = "./test.txt";

// 1. CREATE FILE
function createFile() {
  logger.log("Creating File...");
  fs.writeFile(filePath, "Hello Node.js", (err) => {
    if (err) {
      logger.error(`Failed to create file: ${err.message}`);
      return;
    }
    logger.log("File Created");
    readFile();
  });
}

// 2. READ FILE
function readFile() {
  logger.log("Reading File");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      logger.error(`Failed to read file: ${err.message}`);
      return;
    }
    console.log(data);
    updateFile();
  });
}

// 3. UPDATE FILE (append content)
function updateFile() {
  fs.appendFile(filePath, "\nLearning FS Module", (err) => {
    if (err) {
      logger.error(`Failed to update file: ${err.message}`);
      return;
    }
    logger.log("File Updated");

    // Read again to show updated content
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        logger.error(`Failed to read updated file: ${err.message}`);
        return;
      }
      console.log(data);
      deleteFile();
    });
  });
}

// 4. DELETE FILE
function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) {
      // Handle missing file error gracefully
      if (err.code === "ENOENT") {
        logger.error("File does not exist, nothing to delete.");
      } else {
        logger.error(`Failed to delete file: ${err.message}`);
      }
      return;
    }
    logger.log("File Deleted");
  });
}

// Start the CRUD demo
createFile();

// Run with: node fileManager.js

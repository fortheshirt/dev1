const fs = require("fs");
const file = fs.readFileSync("./logs");

if (!file) {
  throw new Error("logs were empty");
} else {
  console.log(JSON.stringify(file));
}

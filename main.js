const fs = require("fs");
const kevin = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(kevin);
const textout = `Dolce feminante👌 : ${kevin}.\n created on ${Date.now()}`

fs.writeFileSync("./txt/output.txt",textout)
console.log("File has been written")
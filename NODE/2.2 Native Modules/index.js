
//native node modules "File System"
const fs = require("fs");

fs.writeFile("message.txt", "Hello From Node JS!", (err) => {
if (err) throw err;
console.log("The file has been saved");
});
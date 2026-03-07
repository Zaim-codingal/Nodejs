var fs = require("fs");

fs.appendFile("MyFile.txt", "This is a new line added from js. ", function(err){
    if(err) throw err;
    console.log("Saved!");
});
var fs = require("fs");

fs.writeFile("MyFile1.txt", "This is a new line added from js. ", function(err){
    if(err) throw err;
    console.log("Saved!");
});
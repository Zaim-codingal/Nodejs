var fs = require("fs");

fs.unlink("MyFile.txt", function(err){
    if(err) throw err;
    console.log("File deleted!");
});
var fs = require("fs");

fs.rename("MyFile.txt", "MyRenamedFile.txt", function(err){
    if(err) throw err;
    console.log("File Saved!");
});
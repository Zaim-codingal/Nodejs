var my_sql = require("mysql");

var con = my_sql.createConnection({

host: "sql.freedb.tech",

user: "freedb_studentABC",

password: "BtVwj93Ck!beyu",

database: "freedb_studentABC",

port: 3306

});

con.connect(function(err) {

if (err) throw err;

console.log("Connected!");

var sql = "CREATE TABLE student (StudentID INT, StudentName VARCHAR(255), StudentCity VARCHAR(255))";

con.query(sql, function(err, result) {

if (err) throw err;

console.log("Table created");

});

});
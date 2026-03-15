var my_sql = require("mysql2");

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

var sql = "ALTER TABLE student ADD Student_Grade INT";
con.query(sql, function(err, result) {
if (err) throw err;
console.log("Table Altered");
});

});

});
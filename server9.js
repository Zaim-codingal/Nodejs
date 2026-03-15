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

var sql = " INSERT INTO student (StudentID, StudentFirstName, StudentLastName, StudentCity, StudentGrade) Values (05, 'Stu', 'Dent', 'CityTown', 67)";
con.query(sql, function(err, result) {

if (err) throw err;
console.log("1 record inserted");
});
});

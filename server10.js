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

var sql = " INSERT INTO student (StudentID, StudentFirstName, StudentLastName, StudentCity, StudentGrade) Values ?";
var values = [
    [7, 'Tsu', 'Tend', 'CityTown', 6],
    [9, 'Stu', 'Dent', 'CityTown2', 7],
    [11, 'Su', 'Tdent', 'CityTown', 67],
    [13, 'Stu', 'Den', 'TownCity', 76],
    [15, 'St', 'Udent', 'City', 6.7]


];

con.query(sql, values, function(err, result) {

if (err) throw err;
console.log("1 record inserted");
});
});

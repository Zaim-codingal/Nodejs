var SQL = require('mysql')

var con = mysql.createConnection({
    host: "",
    user: "",
    password: "",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    varsqlwork = "CREATE DATABASE student(StudentID int, StudentName varchar(255), StudentCity varchar(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});


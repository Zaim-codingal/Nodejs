var SQL = require('mysql')

var con = mysql.createConnection({
    host: "",
    user: "",
    password: "",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "DROP TABLE student";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Dropped!");
    });
});

var fs = require("fs");
var sqlite3 = require("sqlite3");

exports.list = function (req, res) {
    var db = new sqlite3.Database("./AccountBook.db");
    var sql = "SELECT * FROM V_Account ORDER BY Date LIMIT (select count(*) FROM V_Account)-10,10";
    var data = [];
    db.all(sql, function (err, rows) {
        rows.forEach(function (obj) {
            data.push(obj);
        });
        db.close();
        res.json(data);
    });
};
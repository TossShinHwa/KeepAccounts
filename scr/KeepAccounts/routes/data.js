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

exports.payment = function(req, res) {
    var db = new sqlite3.Database("./AccountBook.db");
    var year = 2012;
    var sql = "select sum(Money) money from A_Payment WHERE substr(Date,1,4)='" + year + "' group by substr(Date,1,7)";
    var data = [];
    db.all(sql, function(err, rows) {
        rows.forEach(function(obj) {
            data.push(obj.money);
        });
        while (data.length < 12) {
            data.push(0);
        }
        db.close();
        res.json(data);
    });
};

exports.income = function (req, res) {
    var db = new sqlite3.Database("./AccountBook.db");
    var year = '2012';
    var sql = "select sum(Money) money from A_Income WHERE substr(Date,1,4)='" + year + "' group by substr(Date,1,7)";
    var data = [];
    db.all(sql, function (err, rows) {
        rows.forEach(function (obj) {
            data.push(obj.money);
        });
        while (data.length < 12) {
            data.push(0);
        }
        db.close();
        res.json(data);
    });
};
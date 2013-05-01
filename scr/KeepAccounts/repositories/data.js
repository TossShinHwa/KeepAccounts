var sqlite3 = require("sqlite3");
var config = require("../config");

exports.list = function (callback) {
    var db = new sqlite3.Database(config.conn);
    var sql = "SELECT * FROM V_Account ORDER BY Date LIMIT (select count(*) FROM V_Account)-10,10";
    var data = [];
    db.all(sql, function(err, rows) {
        rows.forEach(function(obj) {
            data.push(obj);
        });
        db.close();
        callback(data);
    });
};

exports.payment = function (callback) {
    var db = new sqlite3.Database(config.conn);
    var sql = "select substr(Date,1,7) date,sum(Money) amount from A_Payment group by substr(Date,1,7)";
    var data = [];
    db.all(sql, function (err, rows) {
        rows.forEach(function (obj) {
            data.push(obj);
        });
        db.close();
        callback(data);
    });
};

exports.income = function (callback) {
    var db = new sqlite3.Database(config.conn);
    var sql = "select substr(Date,1,7) date,sum(Money) amount from A_Income group by substr(Date,1,7)";
    var data = [];
    db.all(sql, function (err, rows) {
        rows.forEach(function (obj) {
            data.push(obj);
        });
        db.close();
        callback(data);
    });
};

exports.groupbycategories = function (callback) {
    //SELECT MajorCategoryName FROM V_Account WHERE type='Ö§³ö' GROUP BY MajorCategoryName
};
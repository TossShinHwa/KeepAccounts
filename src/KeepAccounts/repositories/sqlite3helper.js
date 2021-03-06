var sqlite3 = require("sqlite3");
var config = require("../config");

exports.getlist = function (sql, callback) {
    var db = new sqlite3.Database(config.conn);
    var data = [];
    db.all(sql, function(err, rows) {
        rows.forEach(function(obj) {
            data.push(obj);
        });
        db.close();
        if (callback!=undefined) callback(data);
    });
};

exports.exec = function (sql) {
    var db = new sqlite3.Database(config.conn);
    db.run(sql);
};

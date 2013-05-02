var config = require("../config");
var sqlite = require("./sqlite3helper");

exports.list = function (callback) {
    var sql = "SELECT * FROM V_Account ORDER BY Date LIMIT (select count(*) FROM V_Account)-10,10";
    sqlite.getlist(sql, callback);
};

exports.payment = function (callback) {
    var sql = "select substr(Date,1,7) date,sum(Money) amount from A_Payment group by substr(Date,1,7)";
    sqlite.getlist(sql, callback);
};

exports.income = function (callback) {
    var sql = "select substr(Date,1,7) date,sum(Money) amount from A_Income group by substr(Date,1,7)";
    sqlite.getlist(sql, callback);
};

exports.income = function (callback) {
    var sql = "select substr(Date,1,7) date,sum(Money) amount from A_Income group by substr(Date,1,7)";
    sqlite.getlist(sql, callback);
};

exports.majorCategory = function (callback) {
    var sql = "select Id,Name,Type from A_MajorCategory";
    sqlite.getlist(sql, callback);
};

exports.subCategory = function (callback) {
    var sql = "select Id,Name,MajorId from A_SubCategory";
    sqlite.getlist(sql, callback);
};

exports.groupbycategories = function (callback) {
    //SELECT MajorCategoryName FROM V_Account WHERE type='Ö§³ö' GROUP BY MajorCategoryName
};
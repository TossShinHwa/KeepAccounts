var config = require("../config");
var sqlite = require("./sqlite3helper");

exports.list = function (callback) {
    var sql = "SELECT * FROM V_Account ORDER BY CreateDate,CreateTime LIMIT (select count(*) FROM V_Account)-10,10";
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

//所有条目的Category
exports.itemsCategory = function (callback) {
    var sql = "select DISTINCT typeId,MajorCategoryId,SubCategoryId,Description from V_Account where MajorCategoryId<>'' and SubCategoryId<>'' GROUP BY typeId,MajorCategoryId,SubCategoryId,Description";
    sqlite.getlist(sql, callback);
};

exports.addItem = function (item) {
    var sql = '';
    if (item.type == 0) {
        sql = "A_Income";//收入
    } else {
        sql = "A_Payment";//支出
    }
    sql = "insert into " + sql + " (Description,Money,Date,MajorCategoryId,SubCategoryId,CreateDate,CreateTime)";
    sql += "values('" + item.Desc + "'," + item.Money + ",'" + item.Date + "'," + item.majorCategory + "," + item.subCategory + ",date('now','localtime'),time('now','localtime'))";
    sqlite.getlist(sql);
};
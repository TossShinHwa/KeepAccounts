var repository = require("../repositories/data");

exports.list = function (req, res) {
    repository.list(function(data) {
        res.json(data);
    });
};

exports.payment = function(req, res) {
    repository.payment(function (data) {
        res.json(data);
    });
};

exports.income = function (req, res) {
    repository.income(function (data) {
        res.json(data);
    });
};

exports.majorCategory = function (req, res) {
    repository.majorCategory(function (data) {
        res.json(data);
    });
};

exports.subCategory = function (req, res) {
    repository.subCategory(function (data) {
        res.json(data);
    });
};

//所有条目的Category
exports.itemsCategory = function (req, res) {
    repository.itemsCategory(function (data) {
        res.json(data);
    });
};

exports.addItems = function (req, res) {
    var items = JSON.parse(req.body.items);
    for (var i = 0; i < items.length; i++)
    {
        repository.addItem(items[i]);
    }
    res.json({ "result": "ok" });
};
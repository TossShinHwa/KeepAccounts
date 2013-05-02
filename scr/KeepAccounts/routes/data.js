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

exports.groupbycategories = function (req, res) {
    repository.groupbycategories(function (data) {
        res.json(data);
    });
};
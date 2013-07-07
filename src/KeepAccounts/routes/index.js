exports.index = function (req, res) {
    res.render('index', { title:'Index' });
};

exports.recent = function (req, res) {
    res.render('recent');
};

exports.yearstatistic = function (req, res) {
    res.render('yearstatistic');
};
const _ = require ('lodash');

exports.passengerDetailsWhoMetWithAccident = function (totalData) {
    var output = [];
    _.mapValues(totalData, function (o) {
        var aboardCount = 0;
        var fatalityCount = 0;
        var groundCount = 0;
        var result = {};
        _.mapValues(o, function (e) {
            result.year = e["Date"].split('/')[2]
            result.Aboard = aboardCount += +(e.Aboard);
            result.Fatalities = fatalityCount += +(e.Fatalities);
            result.Ground = groundCount += +(e.Ground);
        });
        output.push(result);
    });
    return output;
};
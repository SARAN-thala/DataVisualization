const _ = require('lodash');

exports.passengerDetailsWhoMetWithAccident = function (totalData) {
    var output = [];
    _.mapValues(totalData, function (o) {
        let aboardCount = 0;
        let fatalityCount = 0;
        let groundCount = 0;
        let result = {};
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

exports.countryWiseCountOfIncidents = function (totalData) {
    var output = [];
    _.mapValues(totalData, function (o) {
        let count = 0;
        let result = {};
        result.location = o[0]["Location"].split(',').splice(-1)[0].trim(' ');
        result.count = o.length;
        output.push(result);
    })
    return output;
};

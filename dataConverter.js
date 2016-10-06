var papa = require("papaparse");
var fs = require("fs");
var _ = require("lodash");

var data = fs.readFileSync("./data/rawData.csv", "UTF8");
// console.log(data);

var jsonData = papa.parse(data, {header: true});
var groupByDate = _.groupBy(jsonData.data, function (e) {
    return e["Date"].split('/')[2]
});
// console.log(groupByDate['1908'].length)    ;
// var dataFilter = function (groupByDate, keys) {
//     keys.forEach(date,function () {
//
//     })
// };

var passengerDetailsWhoMetWithAccident = function (totalData) {
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

var csvData = papa.unparse(passengerDetailsWhoMetWithAccident(groupByDate));
// console.log(Object.keys(groupByDate).length);
console.log(csvData);

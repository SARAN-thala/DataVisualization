const papa = require('papaparse');
const fs = require('fs');
const _ = require('lodash');
const lib = require('./dataParser');
const inputData = './data/rawData.csv';
var dateCSV = './data/date.csv';

const data = fs.readFileSync(inputData, 'UTF8');
var jsonData = papa.parse(data, {header: true});

var groupByDate = _.groupBy(jsonData.data, function (e) {
    return e["Date"].split('/')[2]
});

var csvData = papa.unparse(lib.passengerDetailsWhoMetWithAccident(groupByDate));

fs.writeFileSync(dateCSV,csvData);
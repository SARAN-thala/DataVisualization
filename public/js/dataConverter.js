const papa = require('papaparse');
const fs = require('fs');
const _ = require('lodash');
const lib = require('./dataParser');
const inputData = '../data/rawData.csv';
var dateCSV = '../data/date.csv';
var countryBasedCSV = '../data/countryBased.csv';

const data = fs.readFileSync(inputData, 'UTF8');
var jsonData = papa.parse(data, {header: true}).data;
jsonData.splice(-1);
var groupByDate = _.groupBy(jsonData, function (e) {
    return e["Date"].split('/')[2]
});

var groupbyLocation = _.groupBy(jsonData,function(e){
    return e["Location"].split(',').splice(-1);
});

var csvDataOfPassengerDetails = papa.unparse(lib.passengerDetailsWhoMetWithAccident(groupByDate));
var csvCountryWiseDataOfIncidents = papa.unparse(lib.countryWiseCountOfIncidents(groupbyLocation));
fs.writeFileSync(dateCSV,csvDataOfPassengerDetails);
fs.writeFileSync(countryBasedCSV,csvCountryWiseDataOfIncidents);

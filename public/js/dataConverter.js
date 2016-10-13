const papa = require('papaparse');
const fs = require('fs');
const _ = require('lodash');
const lib = require('./dataParser');
const inputData = './public/data/rawData.csv';
const dateCSV = './public/data/date.csv';
const countryBasedCSV = './public/data/countryBased.csv';

const data = fs.readFileSync(inputData, 'UTF8');
const jsonData = papa.parse(data, {header: true}).data;
jsonData.splice(-1);
var groupByDate = _.groupBy(jsonData, e => ( e["Date"].split('/')[2]));

var groupbyLocation = _.groupBy(jsonData,e => (e["Location"].split(',').splice(-1)));

var csvDataOfPassengerDetails = papa.unparse(lib.passengerDetailsWhoMetWithAccident(groupByDate));
var csvCountryWiseDataOfIncidents = papa.unparse(lib.countryWiseCountOfIncidents(groupbyLocation));
fs.writeFileSync(dateCSV,csvDataOfPassengerDetails);
fs.writeFileSync(countryBasedCSV,csvCountryWiseDataOfIncidents);

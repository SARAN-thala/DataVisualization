var lib = require('../js/dataParser.js');
const assert = require('assert');

describe('passengerDetailsWhoMetWithAccident', function() {
    it('returns the year if only one but in array', function() {
        assert.deepEqual([ { year: '2009', Aboard: 9, Fatalities: 8, Ground: 0 } ], lib.passengerDetailsWhoMetWithAccident({'2009':[{
                Date: '01/04/2009',
                Time: '15:30',
                Location: 'Near Houma Louisiana',
                Operator: 'Petroleum Helicopters Inc',
                Route: 'Bayou Penchant - Off shore oil fields',
                Type: 'Sikorsky S-76C',
                Registration: 'N748P',
                Aboard: '9',
                Fatalities: '8',
                Ground: '0',
                Summary: 'A helicopter bound for offshore oil fields went down about 75 miles southwest of New Orleans shortly after taking off.'  }]}))
    });
    it('return only year', function() {
        assert.deepEqual([{year: '1908'}], lib.passengerDetailsWhoMetWithAccident({'1908': [{Date:'01/01/1908'}]}))
    });
});
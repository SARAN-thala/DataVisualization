const lib = require('../js/dataParser.js');
const assert = require('assert');

describe('passengerDetailsWhoMetWithAccident', function () {

    it('returns the year,aboard,fatalities and ground if only one in array', function () {
        assert.deepEqual([{year: '2009', Aboard: 9, Fatalities: 8, Ground: 0}], lib.passengerDetailsWhoMetWithAccident({
                '2009': [{
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
                    Summary: 'A helicopter bound for offshore oil fields went down about 75 miles southwest of New Orleans shortly after taking off.'
                }]
            }
        ))
    });

    it('returns the year,aboard,fatalities and ground if multiple in array', function () {
        assert.deepEqual([{year: '2009', Aboard: 18, Fatalities: 16, Ground: 1}, {year: '2019', Aboard: 9, Fatalities: 8, Ground: 0}],
            lib.passengerDetailsWhoMetWithAccident({
                '2009': [
                    {
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
                        Summary: 'A helicopter bound for offshore oil fields went down about 75 miles southwest of New Orleans shortly after taking off.'
                    },
                    {
                        Date: '02/04/2009',
                        Time: '15:30',
                        Location: 'Near Houma Louisiana',
                        Operator: 'Petroleum Helicopters Inc',
                        Route: 'Bayou Penchant - Off shore oil fields',
                        Type: 'Sikorsky S-76C',
                        Registration: 'N748P',
                        Aboard: '9',
                        Fatalities: '8',
                        Ground: '1',
                        Summary: 'A helicopter bound for offshore oil fields went down about 75 miles southwest of New Orleans shortly after taking off.'
                    }],
                '2019': [
                    {
                        Date: '01/04/2019',
                        Time: '15:30',
                        Location: 'Near Houma Louisiana',
                        Operator: 'Petroleum Helicopters Inc',
                        Route: 'Bayou Penchant - Off shore oil fields',
                        Type: 'Sikorsky S-76C',
                        Registration: 'N748P',
                        Aboard: '9',
                        Fatalities: '8',
                        Ground: '0',
                        Summary: 'A helicopter bound for offshore oil fields went down about 75 miles southwest of New Orleans shortly after taking off.'
                    }]
            }
        ))
    });
});
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

    it('returns location and count of incidents if multiple in array', function () {
        assert.deepEqual([{location: 'Virginia', count: 1}, {location: 'New Jersey', count: 1}],
            lib.countryWiseCountOfIncidents({
                '1908': [{
                    Date: '09/17/1908',
                    Time: '17:18',
                    Location: 'Fort Myer, Virginia',
                    Operator: 'Military - U.S. Army',
                    'Flight #': '',
                    Route: 'Demonstration',
                    Type: 'Wright Flyer III',
                    Registration: '',
                    'cn/In': '1',
                    Aboard: '2',
                    Fatalities: '1',
                    Ground: '0',
                    Summary: 'During a demonstration flight, a U.S. Army flyer flown by Orville Wright nose-dived into the ground from a height of approximately 75 feet, killing Lt. Thomas E. Selfridge who was a passenger. This was the first recorded airplane fatality in history.  One of two propellers separated in flight, tearing loose the wires bracing the rudder and causing the loss of control of the aircraft.  Orville Wright suffered broken ribs, pelvis and a leg.  Selfridge suffered a crushed skull and died a short time later.'
                }],
                '1912': [{
                    Date: '07/12/1912',
                    Time: '06:30',
                    Location: 'AtlantiCity, New Jersey',
                    Operator: 'Military - U.S. Navy',
                    'Flight #': '',
                    Route: 'Test flight',
                    Type: 'Dirigible',
                    Registration: '',
                    'cn/In': '',
                    Aboard: '5',
                    Fatalities: '5',
                    Ground: '0',
                    Summary: 'First U.S. dirigible Akron exploded just offshore at an altitude of 1,000 ft. during a test flight.'
                }]
            }))
    })
    it('returns location and count of incidents if single in array', function () {
        assert.deepEqual([{location: 'Virginia', count: 1}],
            lib.countryWiseCountOfIncidents({
                '1908': [{
                    Date: '09/17/1908',
                    Time: '17:18',
                    Location: 'Fort Myer, Virginia',
                    Operator: 'Military - U.S. Army',
                    'Flight #': '',
                    Route: 'Demonstration',
                    Type: 'Wright Flyer III',
                    Registration: '',
                    'cn/In': '1',
                    Aboard: '2',
                    Fatalities: '1',
                    Ground: '0',
                    Summary: 'During a demonstration flight, a U.S. Army flyer flown by Orville Wright nose-dived into the ground from a height of approximately 75 feet, killing Lt. Thomas E. Selfridge who was a passenger. This was the first recorded airplane fatality in history.  One of two propellers separated in flight, tearing loose the wires bracing the rudder and causing the loss of control of the aircraft.  Orville Wright suffered broken ribs, pelvis and a leg.  Selfridge suffered a crushed skull and died a short time later.'
                }]
            }))
    });
});
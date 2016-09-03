var should = require('chai').should(),
    convert = require('../convert'),
    csv2json = convert.csv2json,
    json2csv = convert.json2csv;


describe('convert csv to json', function() {
    it('example csv to json', function() {
        var csv = 'album, year, US_peak_chart_post \n' +
            'The White Stripes, 1999, - \n' +
            'De Stijl, 2000, - \n' +
            'White Blood Cells, 2001, 61 \n' +
            'Elephant, 2003, 6 \n' +
            'Get Behind Me Satan, 2005, 3 \n' +
            'Icky Thump, 2007, 2 \n' +
            'Under Great White Northern Lights, 2010, 11 \n' +
            'Live in Mississippi, 2011, - \n' +
            'Live at the Gold Dollar, 2012, - \n' +
            'Nine Miles from the White City, 2013, - \n';
        (JSON.parse(csv2json(csv)).length).should.equal(11);
    });
});


describe('convert json to csv', function() {
    it('example json to csv', function() {
        var csv = 'album, year, US_peak_chart_post \n' +
            'The White Stripes, 1999, - \n' +
            'De Stijl, 2000, - \n' +
            'White Blood Cells, 2001, 61 \n' +
            'Elephant, 2003, 6 \n' +
            'Get Behind Me Satan, 2005, 3 \n' +
            'Icky Thump, 2007, 2 \n' +
            'Under Great White Northern Lights, 2010, 11 \n' +
            'Live in Mississippi, 2011, - \n' +
            'Live at the Gold Dollar, 2012, - \n' +
            'Nine Miles from the White City, 2013, - \n';
        (json2csv(JSON.parse(csv2json(csv))).length).should.equal(308);
    });
});

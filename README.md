# convertJsonCsv

Javascript module for javascript for convert json to csv and csv to json

## Install

```bash
npm install convert-json-csv
```

## Example

```javascript
var convert = require('convert'),
csv2json = convert.csv2json,
json2csv = convert.json2csv;

var csv = 'album, year, US_peak_chart_post \n' +
          'Live at the Gold Dollar, 1999, - \n' +
          'De Stijl, 2000, - \n' +
          'White Blood Cells, 2001, 61 \n' +
          'Elephant, 2003, 6 \n' +
          'Get Behind Me Satan, 2005, 3 \n' +
          'Icky Thump, 2007, 2 \n' +
          'Under Great White Northern Lights, 2010, 11 \n' +
          'Live in Mississippi, 2011, - \n' +
          'The White Stripes, 2012, - \n' +
          'Nine Miles from the White City, 2013, - \n';
csv2json(csv);
json2csv(JSON.parse(csv2json(csv));
```

## License

MIT

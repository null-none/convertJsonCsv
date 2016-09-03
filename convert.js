module.exports = {
    csv2json: function(csv) {
        var lines = csv.split('\n');
        var result = [];
        var headers = lines[0].split(',');
        lines.splice(0, 1);
        lines.forEach(function(line) {
            var obj = {};
            var currentline = line.split(',');
            headers.forEach(function(header, i) {
                obj[header] = currentline[i];
            });
            result.push(obj);
        });
        return JSON.stringify(result);
    },
    json2csv: function(json) {
        var array = typeof json != 'object' ? JSON.parse(json) : json;
        var str = '';

        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }

            str += line + '\r\n';
        }

        return str;
    }
}

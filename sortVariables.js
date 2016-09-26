var fs            = require('fs');
var variables     = require('./variables.json');

function compare(a,b) {
  if (a.context.line.start < b.context.line.start)
    return -1;
  if (a.context.line.start > b.context.line.start)
    return 1;
  return 0;
}

variables.sort(compare);

fs.writeFileSync('./variables.json', JSON.stringify(variables, null, 2) , 'utf-8');
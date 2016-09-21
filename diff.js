var pkg           = require('./package.json');
var colors        = require('colors');
var jsdiff        = require('diff');
var fs            = require('fs');

fs.readFile('./dist/css/'+pkg.name+'.css', 'utf8', function(err, backward) {
    if (err) throw err;
    // console.log(backward);
    fs.readFile('./bower_components/bootstrap/dist/css/bootstrap.css', 'utf8', function(err, original) {
        if (err) throw err;
        // console.log(original);
        
        var diff = jsdiff.diffCss(original, backward);

        diff.forEach(function(part){
            // green for additions, red for deletions
            // grey for common parts
            var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
            if(part.added ||  part.removed) {
                process.stderr.write(part.value[color]);
            }
            console.log();
            
        });
    
    });
});

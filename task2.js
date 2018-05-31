/* Task 2 */

var str = process.argv[2],
    lastIndex = 0,
    maxPrefix = '',
    prefix,
    template,
    result;

for(var k = 1; k < str.length; k++) {
    prefix = str.substr(0, k);
    template = new RegExp('\\B' + prefix);
    result = str.match(template);
    if (result && result.index >= lastIndex ) {
	maxPrefix = prefix;
    }
}

process.stdout.write(maxPrefix);
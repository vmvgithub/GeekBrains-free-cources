/* Task 2 */

var str = process.argv[2],
    prefix,
    template,
    result,
    maxPrefix;

if (str) {

    for(var k = 1; k < str.length; k++) {

	prefix = str.substr(0, k);
	template = new RegExp('\\B' + prefix);
	result = str.match(template);

	if (!result) {
	    break;
	}

	if (result.index >= 0 ) {
	    maxPrefix = prefix;
	}

    }

    process.stdout.write(maxPrefix);

} else {

    process.stdout.write('');

}
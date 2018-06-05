/* Task 2 */

var str = process.argv[2],
    prefix,
    strLength,
    counter,
    maxPrefix = '';

if (str) {

    maxPrefix = str;

    strLength = str.length;

    for (var k = 1; k < strLength; k++) {

	prefix = str.substr(0, k);

	counter = 0;

	for (var n = 1; n < strLength - k + 1; n++) {

	    if (prefix === str.substr(n, k)) {

		++counter;

		if (counter == 1 && prefix === str.substr(-prefix.length)) {

		    continue;

		}

		maxPrefix = prefix;

		break;

	    }

	}

    }

}

process.stdout.write(maxPrefix);

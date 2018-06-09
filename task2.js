/* Task 2 */

var str = process.argv[2],
    strLength,
    subStrs = [],
    subStr,
    maxSubStr = '',
    counter;

if (str) {

    strLength = str.length;

    for (var i = 0; i < strLength; i++) { 

	for (var j = i; j < strLength; j++) { 

	    subStr = str.substr(i, (j - i) + 1);

	    if (subStrs.indexOf(subStr) === -1) {

		subStrs.push(subStr);

	    }

	}

    }

    subStrs.forEach(function(pattern) {

	if (pattern.length > maxSubStr.length) {

		counter = 0;

		for (var k = 0; k <= strLength - pattern.length; k++) {

		    subStr = str.substr(k, pattern.length);

		    if (subStr === pattern) {

			++counter;

			if (counter > 1 && pattern.length > maxSubStr.length) {

			    maxSubStr = pattern;

			    break;

			}

		    }

		}

	}

    });

}

process.stdout.write(maxSubStr);

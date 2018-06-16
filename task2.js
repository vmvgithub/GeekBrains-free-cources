/* Task 2 */

if (process.argv.length != 3) {
    process.exit(1);
}

var str = process.argv[2],
    strLength = str.length,
    subStrs = {},
    subStr,
    maxSubStr = '';

for (var i = 0; i < strLength; i++) {

    for (var j = strLength - 1; j >= i; j--) {

	subStr = str.substr(i, (j - i) + 1);

	if (subStr in subStrs) {

		++subStrs[subStr];

		if (subStrs[subStr] > 1 && subStr.length > maxSubStr.length) {

		    maxSubStr = subStr;

		}

	    } else {

		subStrs[subStr] = 1;

	    }

    }

}

process.stdout.write(maxSubStr);

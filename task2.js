/* Task 2 */

var str = (process.argv[2]) ? process.argv[2] : '',
    strLength,
    subStrs = {},
    subStr,
    maxSubStr = '';

strLength = str.length;

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

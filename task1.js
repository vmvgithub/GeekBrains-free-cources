/* Task 1 */
process.exit();

var digits = ['0', '1','2','3','4','5','6','7','8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

if (process.argv.length != 5) {
    process.exit(1);
}

var i = process.argv[2],
    a = parseInt(process.argv[3]),
    b = parseInt(process.argv[4]);

if (a === b) {
    process.stdout.write(i.toString());
    process.exit();
}

if (a === 10 ) {
    process.stdout.write(fromDec(i, b).toString());
    process.exit();
}

if (b === 10 ) {
    process.stdout.write(toDec(i, a).toString());
    process.exit();
}

if (a !== 10 && b !== 10) {
    process.stdout.write(fromDec(toDec(i, a), b).toString());
}

function toDec(number, notation) {


    var result = 0,
	maxPosition = number.length - 1;

    for (var k = 0; k <= maxPosition; k++) {
	if (digits.indexOf(number[k]) >= notation) {
	    return '';
	}
	result += digits.indexOf(number[k]) * Math.pow(notation, maxPosition - k);
    }

    return result;
}

function fromDec(number, notation) {

    var result = [],
	number = parseInt(number),
	remainder;

    if (!isFinite(number)) {
	return '';
    }

    if (number < notation) {
	return digits[number];
    }

    do {

	remainder = number % notation;
	result.push(digits[remainder]);
	number = (number - remainder) / notation;

	if (number < notation) {
	    result.push(digits[number]);
	    break;
	}

    } while (true);

    return result.reverse().join('');
}

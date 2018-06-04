/* Task 3 */

if (process.argv.length != 4) {
    process.exit(1);
}

var a = parseInt(process.argv[2]),
    b = parseInt(process.argv[3]);

while(a != 0 && b != 0) {
    if ( a > b ) {
        a %= b;
    } else {
        b %= a;
    }
}

process.stdout.write((a + b).toString());

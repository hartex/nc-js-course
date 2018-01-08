/**
 * Debugging
 *
 * @see {@link https://mozilladevelopers.github.io/playground/debugger|Debugging tutorial}
 * */
function debugMe() {
    let result = 0;
    for (let p = 0; p < 100000; p++) {
        result += Math.pow(p, 2);
    }
    return result;
}

var debuggingResult = debugMe();
console.log(debuggingResult);
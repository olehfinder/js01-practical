alert('Hello');
const a = parseFloat(prompt ('Enter a'));
const b = parseFloat(prompt ('Enter b'));
const c = parseFloat(prompt ('Enter c'));

function solveQuardEg (a, b, c) {
    const d = b * b - 4 * a * c;
    if (d < 0) {
        return "There is no valid solution"
    } else if (d === 0) {
        return "Threre is only one result" + -b/(2*a);
    }
    const x1 = (-b + Math.sqrt(d))/(2 * a);
    const x2 = (-b - Math.sqrt(d))/(2 * a);
    return ("x1 = " + x1 + "x2 = " + x2);
}

alert (solveQuardEg(a, b, c));
 
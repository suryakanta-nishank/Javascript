function multiply(a, b, c) {
    return a * b * c;
}

function addition(a, b, c) {
    return a + b + c;
}

export default function division(a, b) {
    if (b === 0) {
        return 'Division by zero is not allowed';
    }
    return a / b;
}

export {
    multiply as mul,
    addition as add
}

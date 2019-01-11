function calc2(lVal, rVal, symbol) {
    switch (symbol) {
        case '+':
            return lVal + rVal;
        case '-':
            return lVal - rVal;
        case 'x':
            return lVal * rVal;
        default:
            return lVal / rVal;
    }
}

export const equationCalc = (equation) => {
    // equation is list like [2, 'x', 4, '+', 1]
    // equation at least has one number, and end with number
    while (equation.length > 3) {
        let
            lVal = equation[0],
            lSym = equation[1],
            rVal = equation[2],
            rSym = equation[3];
        if (['+', '-'].includes(lSym) && ['x', '÷'].includes(rSym)) {
            // lower priority
            let i = 3;
            while (i < equation.length) {
                if (['+', '-'].includes(equation[i])) {
                    break;
                }
                ++i;
            }
            let tmp = equationCalc(equation.slice(2, i));
            if (i === equation.length) {
                return calc2(lVal, tmp, lSym);
            } else {
                let AfterEquation = equation.slice(i);
                AfterEquation.unshift(tmp);
                equation = equation.slice(0, 2).concat(AfterEquation);
            }
        } else {
            // same or larger priority
            equation[2] = calc2(lVal, rVal, lSym);
            equation = equation.slice(2)
        }
    }
    if (equation.length === 3) {
        return calc2(equation[0], equation[2], equation[1]);
    } else if (equation.length === 1) {
        return equation[0];
    } else return 0;

};

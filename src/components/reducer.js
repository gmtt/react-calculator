import {equationCalc} from "./equationCalc";

export const calculator = (state = {
    equation: [],
    cur: '',
    preRes: '',
    history: [],
    toggleHistory: false
}, action) => {
    let equation = state.equation.slice(0);
    switch (action.type) {
        case 'TOGGLE_HISTORY':
            return {
                ...state,
                toggleHistory: !state.toggleHistory
            };
        case 'EQUAL':
            if (state.cur === "") {
                if (equation.length > 0 && ['+', '-', 'x', '÷'].includes(equation[equation.length - 1])) {
                    equation = equation.slice(0, -1)
                }
            } else {
                equation.push(Number(state.cur));
            }
            let res = equationCalc(equation.slice(0));
            equation.push('=', res);
            let history = state.history.slice(0);
            history.push(equation);
            return {
                ...state,
                equation: [],
                cur: '',
                preRes: res,
                history
            };
        case 'ADD_SYMBOL':
            if (state.cur === "") {
                if (equation.length > 0) {
                    equation[equation.length - 1] = action.symbol;
                }
            } else {
                equation.push(Number(state.cur), action.symbol);
            }
            return {
                ...state,
                equation,
                cur: ''
            };
        case 'ADD_NUM':
            if (state.cur === '0') {
                return {
                    ...state,
                    cur: action.num
                }
            } else {
                return {
                    ...state,
                    cur: state.cur + action.num
                }
            }
        case 'CLEAR_CUR':
            return {
                ...state,
                cur: ''
            };
        case 'CLEAR_EQUATION':
            return {
                ...state,
                equation: [],
                cur: ''
            };
        case 'ADD_DOT':
            if (!state.cur.includes('.')) {
                return {
                    ...state,
                    cur: state.cur + '.'
                }
            } else {
                return state
            }
        case 'BACK':
            if (state.cur.length > 1) {
                return {
                    ...state,
                    cur: state.cur.slice(0, -1)
                }
            } else {
                return {
                    ...state,
                    cur: ''
                }
            }
        case 'TOGGLE_NEG':
            if (state.cur !== '0') {
                if (state.cur.startsWith('-')) {
                    return {
                        ...state,
                        cur: state.cur.slice(1)
                    }
                } else {
                    return {
                        ...state,
                        cur: '-' + state.cur
                    }
                }
            } else {
                return state
            }
        default:
            return state
    }
};
export const addSymbol = symbol => ({
    type: 'ADD_SYMBOL',
    symbol
});

export const addNum = num => ({
    type: 'ADD_NUM',
    num
});

export const clearCur = {
    type: 'CLEAR_CUR'
};

export const clearEquation = {
    type: 'CLEAR_EQUATION'
};

export const addDot = {
    type: 'ADD_DOT'
};

export const back = {
    type: 'BACK'
};

export const toggleNeg = {
    type: 'TOGGLE_NEG'
};

export const equal = {
    type: 'EQUAL'
};

export const toggleHistory = {
    type: 'TOGGLE_HISTORY'
};
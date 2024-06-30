let arr = [];
let braketsLvl = [];
let operations = ['+', '-', '/', '*', '(', undefined]
let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let isDot = false

const ClearElement = (expression) => {
    let last = expression[expression.length - 1];
    if (last === '(') {
        braketsLvl.pop();
    } else if (last === ')') {
        braketsLvl.push(true);
    }
    var result = expression.substring(0, expression.length - 1);
    if (result === undefined) result = ''
    return result
}

const Clear = () => {
    return ''
}

const CheckBrackets = (expression, value) => {
    var last = expression[expression.length - 1];
    if (value === '(') {
        if (!operations.includes(last)) return expression;
        braketsLvl[braketsLvl.length] = true
        expression += value
    } else if (value === ')') {
        for (let i = 1; i <= braketsLvl.length; i++) {
            if (braketsLvl[braketsLvl.length - i]) {
                braketsLvl[braketsLvl.length - i] = false;
                braketsLvl.pop();
                expression += value;
                break;
            }
        }
    }
    return expression;
}

const Default = (expression, value) => {
    var last = expression[expression.length - 1]
    if (operations.includes(value) && operations.includes(last) && last !== '(') {
        if (value !== last) {
            expression = expression.slice(0, -1) + value
        }
    } else if (value === '.') {
        if (!isDot) {
            if (nums.includes(last)) {
                expression += value
                isDot = !isDot
            }
        }
    } else {
        if (operations.includes(value) && isDot) isDot = !isDot
        expression += value
    }
    return expression
}

const Calculating = (expression) => {
    var result = parsing(expression)
    return result
}


const parsing = (expr) => {
    let item = '';
    arr = [];
    for (let i = 0; i < expr.length; i++) {
        switch (expr[i]) {
            case '+':
            case '-':
                if (i === 0 || expr[i - 1].toString() === '(') {
                    item += expr[i]
                    break
                }
            case '/':
            case '*':
                if (item !== '') arr.push(item);
                arr.push(expr[i]);
                item = '';
                break;
            case '(':
                if (item !== '') arr.push(item);
                arr.push(expr[i]);
                break;
            case ')':
                if (item !== '') arr.push(item);
                arr.push(expr[i]);
                item = '';
                break;
            default:
                item += expr[i];
        }
    }
    if (item !== '') arr.push(item);
    return checkBrackets(arr)
}

const checkBrackets = (arr) => {
    var openedBrackers = [];
    var closedBrackers = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            openedBrackers.push(i);
        } else if (arr[i] === ')') {
            closedBrackers.push(i);
        }
    }
    if (openedBrackers.length !== closedBrackers.length) {
        return "Закрыты не все скобки"
    } else if (openedBrackers.length != 0) {
        while (openedBrackers.length != 0) {
            var open = openedBrackers.pop()
            var close = closedBrackers.pop()
            var inBrackesArr = []
            for (var i = 0; i < (close - open + 1); i++) {
                inBrackesArr[i] = arr[open + i]
            }
            inBrackesArr.pop()
            inBrackesArr.shift()
            inBrackesArr = calcInBrackets(inBrackesArr)
            arr.splice(open, close - open + 1, inBrackesArr)
            inBrackesArr = []
        }
    }
    return calcResult(arr);
}


const calcInBrackets = (inBrackes) => {
    var resultInBrackers;
    for (var i = 0; i < inBrackes.length; i++) {
        if (inBrackes[i] === '*') {
            resultInBrackers = +inBrackes[i - 1] * +inBrackes[i + 1];
            inBrackes.splice(i - 1, 3, String(resultInBrackers));
            i = 0;
        } else if (inBrackes[i] === '/') {
            resultInBrackers = Number(inBrackes[i - 1]) / Number(inBrackes[i + 1]);
            inBrackes.splice(i - 1, 3, `${resultInBrackers}`);
            i = 0;
        }
    }
    for (var i = 0; i < inBrackes.length; i++) {
        if (inBrackes[i] === '+') {
            resultInBrackers = Number(inBrackes[i - 1]) + Number(inBrackes[i + 1]);
            inBrackes.splice(i - 1, 3, String(resultInBrackers));
            i = 0;
        } else if (inBrackes[i] === '-') {
            resultInBrackers = Number(inBrackes[i - 1]) - Number(inBrackes[i + 1]);
            inBrackes.splice(i - 1, 3, String(resultInBrackers));
            i = 0;
        }
    }
    return inBrackes[0];
}

const calcResult = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        var avgResult = 0;
        if ((arr[i] === '*') || (arr[i] === '/')) {
            if (arr[i] === '*') {
                avgResult = +arr[i - 1] * +arr[i + 1];
            } else {
                avgResult = +arr[i - 1] / +arr[i + 1];
            }
            arr.splice(i - 1, 3, avgResult);
        }
    }
    for (var i = 0; i < arr.length; i++) {
        var avgResult = 0;
        if ((arr[i] === '-') || (arr[i] === '+')) {
            if (arr[i] === '+') {
                avgResult = +arr[i - 1] + +arr[i + 1];
            } else {
                avgResult = +arr[i - 1] - +arr[i + 1];
            }
            arr.splice(i - 1, 3, avgResult);
        }
    }

    return arr[0];
}

module.exports = { ClearElement, Clear, CheckBrackets, Default, Calculating };
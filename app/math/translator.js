export const translate = (systemFrom, systemTo, value) => {
    const numericValue = typeof value === 'string' ? parseInt(value, 10) : value;
    const binReg = /^[01]+$/;
    const decReg = /^\d+$/
    const octReg = /^[0-7]+$/;
    const hexReg = /^[0-9A-Fa-f]+$/;

    if (systemFrom === 'BIN') {
        if (!binReg.test(value)) return 'Invalid bin value'
        switch (systemTo) {
            case 'BIN ':
                return numericValue
            case 'OCT ':
                return parseInt(numericValue, 2).toString(8);
            case 'DEC ':
                return parseInt(numericValue, 2);
            case 'HEX ':
                return parseInt(numericValue, 2).toString(16);
        }
    } else if (systemFrom === 'OCT') {
        if (!octReg.test(value)) return 'Invalid oct value'
        switch (systemTo) {
            case 'BIN ':
                return parseInt(numericValue, 8).toString(2);
            case 'OCT ':
                return numericValue
            case 'DEC ':
                return parseInt(numericValue, 8);
            case 'HEX ':
                return parseInt(numericValue, 8).toString(16);
        }
    } else if (systemFrom == 'DEC') {
        if (!decReg.test(value)) return 'Invalid dec value'
        switch (systemTo) {
            case 'BIN ':
                return numericValue.toString(2);
            case 'OCT ':
                return numericValue.toString(8);
            case 'DEC ':
                return numericValue
            case 'HEX ':
                return numericValue.toString(16);
        }
    } else if (systemFrom === 'HEX') {
        if (!hexReg.test(value)) return 'Invalid hex value'
        switch (systemTo) {
            case 'BIN ':
                return parseInt(numericValue, 16).toString(2);
            case 'OCT ':
                return parseInt(numericValue, 16).toString(8);
            case 'DEC ':
                return parseInt(numericValue, 16);
            case 'HEX ':
                return numericValue;
        }
    }
}
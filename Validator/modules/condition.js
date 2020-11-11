export {checkType, numberInRange, nonEmptyString};

function checkType(value, requiredType) {
    return typeof value === requiredType;
}

function nonEmptyString(value) {
    return value.length > 0;
}

function numberInRange(value, min, max) {
    return min <= value && value <= max;
}


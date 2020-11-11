export {validateObject};

function validateField(object, key, keyDescription) {
    const errorList = [];

    const objectKeyValue = object[key];

    keyDescription.forEach((descr) => {
        const argsArray = [objectKeyValue, ...descr.validationParams];
        if (!descr.validationRule.apply(null, argsArray)) {
            errorList.push({
                key,
                message: descr.validationMessage,
            });
        }
    });
    return errorList;
}

function validateObject(object, objectScheme) {
    const errorList = [];

    Object.keys(objectScheme).forEach((key) => {
        errorList.push(...validateField(object, key, objectScheme[key]));
    });

    return errorList;
}
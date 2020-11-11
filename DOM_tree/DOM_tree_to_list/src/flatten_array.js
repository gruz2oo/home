export function flattenArray(obj) {
    let result = [];
    const array = Array.isArray(obj) ? obj : [obj];
    array.forEach((item) => {
        result.push(item);
        if (item.children) {
            result = [...result, ...flattenArray(item.children)];
            delete item.children
        }
    });
    return result
}
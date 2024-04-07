function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let copiedObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copiedObj[key] = deepCopy(obj[key]);
        }
    }

    return copiedObj;
}

const object = {
    name: 'Janne',
    age: 24,
    address: {
        city: 'Tyumen',
        street: 'Dostoevskogo',
        house: 7
    },
    date: new Date(),
};

const copiedObj = deepCopy(object);
console.log(copiedObj)
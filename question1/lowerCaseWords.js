const mixedArray = ['PIZZA', 10, true, false, 'Wings'];

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            const filter = mixedArray
                .filter(item => typeof item === 'string')
                .map(str => str.toLowerCase());
            resolve(filter);
        } catch (error) {
            reject('Error');
        }
    });
}

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));


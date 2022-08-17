const array = [1, 2, 3, -4, 5]

testFunction = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log('Правда');
            result.push(arr[i])         
        }
    }

    return result
}



const t = testFunction(array);
console.log(t);
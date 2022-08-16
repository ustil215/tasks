const arrow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null];

const arrcalculat = (arr) => {
    let length = 0;

    arr.forEach(element => {
        length++;
    });

    return length;
}

const result = arrcalculat(arrow);
console.log(result);


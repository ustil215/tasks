const arrow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12];

testFunction = (arr, val) => {
    let newArrow = [];

    arrow.forEach((value , index) => {
        if(value > val) {
          newArrow.push(value);
        }
    });

    return newArrow;
}

const t = testFunction(arrow, 1);
console.log(t);



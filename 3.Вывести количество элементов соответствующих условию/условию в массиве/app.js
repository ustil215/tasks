const arrow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12, 13];

testFunction = (arr, val) => {
    let newArrow = [];

    arrow.forEach((value) => {
        if(value > val) {
          newArrow.push(value);
        }
    });

    return lengthFunction(newArrow);
}

lengthFunction = (arr) => {
  let count = 0;

  arr.forEach((value, index) => {
    count = index + 1;
  });

  return count;
}

const t = testFunction(arrow, 1);
console.log(t);



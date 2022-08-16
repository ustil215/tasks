let arrow = [5, 1, 2, 19, 80, 505, 8, 7, 3, 101, 590]
let arrow2 = [
  {
    name: 'test',
    age: 9
  },
  {
    name: 'west',
    age: 50
  },
  {
    name: 'rest',
    age: 11
  },
  {
    name: 'test',
    age: 30
  }
];

testFunction = (arr, val, val2) => {
  arrow.forEach(value => {
    if(value > val && value < val2) {
      console.log(value);
    }
  })
};

lengthFunction = (arr) => {
  let count = 0;

  arr.forEach((value, index) => {
    count = index + 1;
  });

  return count;
}

const t = testFunction(arrow, 8, 590);
console.log(t);



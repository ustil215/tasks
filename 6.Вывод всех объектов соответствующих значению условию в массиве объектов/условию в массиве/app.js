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

testFunction = (arr, val) => {
  arrow2.forEach(element => {
    if(element.age >= val) {
      console.log(element);
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

const t = testFunction(arrow2, 11);
console.log(t);



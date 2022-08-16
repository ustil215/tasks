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
    age: 89
  },
  {
    name: 'test',
    age: 30
  }
];

testFunction = (arr, val, val2) => {
  let resoult = [];

  arr.forEach(value => {
    if(!(value.name === val && value.age > val2)){
      resoult.push(value);
    }
  })

  return resoult;
};

lengthFunction = (arr) => {
  let count = 0;

  arr.forEach((value, index) => {
    count = index + 1;
  });

  return count;
}

const t = testFunction(arrow2, 'rest', 18);
console.log(t);



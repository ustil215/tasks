let arrow2 = [5, 1, 2, 19, 80, 505, 8, 7, 3, 101, 590, 46464646];
let arrow = [
  {
    name: 'test',
    age: 9,
    country: 'RF'
  },
  {
    name: 'west',
    age: 50,
    country: 'RF'
  },
  {
    name: 'rest',
    age: 89,
    country: 'RF'
  },
  {
    name: 'test',
    age: 30,
    country: 'RF'
  },{
    name: 'mest',
    age: 40,
    country: 'RF'
  }
];

testFunction = (arr)  => {
  // let max = -1;

  // arr.forEach(value => {
  //   if (value > max) {
  //     max = value;
  //   }
  // })

  // return max;

  let max = arr[0];

  arr.forEach(value => {
    if (value.age > max.age) {
      max = value;
    }
  })

  return max;
}

console.log(testFunction(arrow));

// const lengthFunction = (arr) => {
//   let count = 0;

//   arr.forEach(item => count++);
//   return count;
// };







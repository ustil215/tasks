let Arrow = [
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
  }
];

const filterFunction = (collection, age) => {
  // let flag = false;
  // collection.forEach(item => {
  //   if (item.age > age) flag = true;
  // })
  // return flag;

  let count = 0;

  collection.forEach(item => {
    if (item.age > age) count++;
  })

  return count > 0;
}

console.log(filterFunction(Arrow, 18));

const lengthFunction = (arr) => {
  let count = 0;

  arr.forEach(item => count++);
  return count;
};







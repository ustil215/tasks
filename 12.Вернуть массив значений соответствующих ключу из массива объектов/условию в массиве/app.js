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
  },{
    name: 'mest',
    age: 40,
    country: 'RF'
  }
];

filterFunction = (arr, name)  => {
  const arrowItem = [];
  
  arr.forEach (item => {
    arrowItem.push(item[name]);
  })
  return arrowItem;
}

console.log(filterFunction(Arrow, 'name'));

const lengthFunction = (arr) => {
  let count = 0;

  arr.forEach(item => count++);
  return count;
};







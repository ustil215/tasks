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

const lengthFunction = (arr) => {
  let count = 0;

  arr.forEach(item => count++);
  return count;
};

const filterFunction = (collection, age, country) => {
  let count = 0; 

  collection.forEach (item => {
    if (item.age >= age && item.country === country) {
      count++; 
    }
  })
  
  const result = lengthFunction(collection) === count; 
  return result;
}

console.log(filterFunction(Arrow, 8 , 'RF'));





let arrow2 = [5, 1, 2, 19, 80, 505, 8, 7, 3, 101, 590, 46464646];
let arrow3 = [5, 1, 2, 19, 80, 505, 8, 7, 3, 101, 590, 46464646];
let arrow4 = [5, 1, 2, 19, 80, 505, 8, 7, 3, 101, 590, 46464646];
// let arrow = [
//   {
//     name: 'test',
//     age: 9,
//     country: 'RF'
//   },
//   {
//     name: 'west',
//     age: 50,
//     country: 'RF'
//   },
//   {
//     name: 'rest',
//     age: 89,
//     country: 'RF'
//   },
//   {
//     name: 'test',
//     age: 30,
//     country: 'RF'
//   },{
//     name: 'mest',
//     age: 40,
//     country: 'RF'
//   }
// ];

const ar = {
  name: 'test',
  age: 9,
  country: 'RF'
};


testFunction = (obj, keyVal)  => {
  let keys = [];

for (let key in obj) {
  keys.push(key);
}
let flag  = false;
keys.forEach(item => {
  if(keys === keyVal) flag = true;
});

return flag ? 'exist' : 'no exist';
}


// const lengthFunction = (arr) => {
//   let count = 0;

//   arr.forEach(item => count++);
//   return count;
// };

const t = testFunction(ar, 'test');

console.log(t);






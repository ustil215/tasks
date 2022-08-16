let arrow2 = [5, 1, 2, 19, 80, 505, 8, 7, 3, 101, 590, 46464646];
let arrow1 = [5, -1, null, 19, 80, 505, false, 7, 3, 101, undefined, 46464646, ''];
let arrow4 = [5, 1, 2, 19, 80, 505, 8, 7, 3, 101, 590, 46464646];
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




moveElement = (arr, from, to)  => {
  const temp = arr[to];
  arr[to] = arr[from];
  arr[from] = temp;

  return arr;
}




const t = moveElement(arrow2, 1, 5);

console.log(t);






const testFunction = (arr, value) => {
  let number = -1;

  arr.forEach((element, index) => {
    if(element === value) {
      number = index;
    }    
  });

  return number;
};

const arrow = [1, 2, 5, 4, 5, 6, 7, 5, 9, 10, 11, 12, 13];
const resolt = testFunction(arrow, 5)
console.log("resolt", resolt);




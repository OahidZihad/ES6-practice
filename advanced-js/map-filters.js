//////////// Maps dorkar pore array er jonno......

const numbers = [3, 4, 5, 6, 7, 8];

// const output = [];

// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
            ///// OR /////
///// using map
// function square(element){
//     return element * element;
// }

///////// OR ////////

// const square = (element) => element * element;

///////// OR ////////

// const square = (x) => x * x;

///////// OR ////////

// const result = numbers.map(function(element, index, array){
//     return element * element;
// });

///////// OR ////////

const result = numbers.map(x => x * x);

console.log(result);


/////////////////////////////////////// FILTER ////////////////////////////////////////

/// filter kaje lage array filter korar jonno............

const bigger = numbers.filter(x => x > 5);

const isThere = numbers.find(x => x > 5);

console.log(isThere);
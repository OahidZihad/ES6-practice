const ages = [12, 14, 16, 13, 15, 11];
const ages2 = [14, 15, 12, 11, 17, 12];
const ages3 = [24, 25, 22, 21, 27, 22];

const allAges = ages.concat(ages2).concat([1111]).concat(ages3);
const allAges2 = [...ages, ...ages2, 1111, ...ages3];
// console.log(allAges2);
const business = 640;
const minister = 450;
const sochib = 250;
const takaPoisa = [640, 450, 250];
const maximum = Math.max(...takaPoisa);
console.log(maximum);
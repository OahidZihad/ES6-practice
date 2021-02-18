const students = [
    {id: 1711855642, name: "Oahid Zihad"},
    {id: 17121642642, name: "Rifat Hasan"},
    {id: 171545642, name: "Deepjol"},
    {id: 1711855642, name: "Ahad Jibon"},
    {id: 1711855642, name: "Habiba Jannati"},
    {id: 1701855642, name: "Tushar"}
];

// const names = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     names.push(element.name);
// }
// console.log(names);

/////// OR /////////

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 1711755642);
const biggerOne = students.find(s => s.id > 1711755642);
console.log(biggerOne);
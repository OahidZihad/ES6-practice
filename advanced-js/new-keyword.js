class Person{
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 25000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', "Salam", 25000);
console.log(friendlyPerson);



//////////////////////// do not use this function system.......////////////////////
// function Person1(firstName, lastName, salary){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }
// const oldPerson = new Person1("Grand", "Papa", 1200);
// console.log(oldPerson);
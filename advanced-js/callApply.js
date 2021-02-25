const normalPerson = {
    firstName: 'Oahid',
    lastName: 'Zihad',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// console.log(normalPerson.firstName);
// normalPerson.chargeBill(150);
// normalPerson.chargeBill(1500);
// console.log(normalPerson.salary);


const heroPerson = {
    firstName: "Hero",
    lastName: "Balam",
    salary: 25000
}

const friendlyPerson = {
    firstName: "Hero",
    lastName: "Golam",
    salary: 20000000
}

// normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);
console.log(friendlyPerson.salary);

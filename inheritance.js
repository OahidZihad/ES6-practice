class Parent{
    constructor() {
        this.fatherName = "Schwerzengger";
    }
}

class Child extends Parent{
    constructor(cName){
        super();        ////// super Parent class er constructor k dharon kore.....
        this.name = cName;
    }
    getFullName(){
        return this.name +' '+ this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");

console.log(baby.getFullName());
console.log(baby2.getFullName());
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "AUSSN";
    }
}

const student1 = new Student(12, "Habiba");
const student2 = new Student(16, "Prapti");
const student3 = new Student(29, "Jannati");

console.log(student1.name, student2, student3.school);
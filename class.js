class Student{
    constructor(sId,sName,sSchool){
        this.id = sId;
        this.name = sName;
        this.school = sSchool;
    }

}

const student1 = new Student(12, "manik","mghs");
const student2 = new Student(22, "jinuk","dghs");

console.log(student1,student2);
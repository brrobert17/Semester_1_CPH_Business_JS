export class Student {
    constructor(name, id, grades = []) {
        this.name = name;
        this.id = id;
        this.grades = grades;
    }
    addGrades = grade => this.grades.push(grade);

    setName = name => this.name = name;
}
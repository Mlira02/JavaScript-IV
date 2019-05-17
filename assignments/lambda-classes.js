// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(insAttr) {
        super(insAttr);
        this.specialty = insAttr.specialty;
        this.favLanguage = insAttr.favLanguage;
        this.catchPhrase = insAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(stAttr) {
        super(stAttr);
        this.previousBackground = stAttr.previousBackground;
        this.className = stAttr.className;
        this.favSubjects = stAttr.favSubjects;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }

    PRAssignment(subject) {
        console.log(`${Student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel) {
        `${this.name} announces to ${channel}, @channel standby times!`;
    }

    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}


const Me = new Person({
    name: "Mark",
    age: 10,
    locaton: "Washington"
});


Me.speak();

const Ins = new Instructor({
    name: "Ned",
    age: 20,
    location: "Georgia",
    specialty: "java",
    favLanguage: "Java",
    catchPhrase: "Whatever whatever!!"
})

const Carrie = new Student({
    name: "Carrie",
    age: 22,
    location: "Orlando, FL",
    previousBackground: "College",
    className: "Web20",
    favSubjects: "React",
})

const Ryan = new ProjectManager({
    name: "Ryan",
    age: 25,
    location: "Georgia"
});


console.log(Ryan.debugsCode(Carrie, "Math"));
Carrie.listsSubjects();

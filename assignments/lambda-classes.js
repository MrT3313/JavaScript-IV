// CODE here for your Lambda Classes


class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location; 
        this.gender = personAttributes.gender;
    }

    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructors extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);

        this.speciality = instructorAttributes.speciality;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo (subject) {
        return `Today we are learning about ${this.speciality}`
    };

    grade (student, subject) {
        return `${this.student} receives a perfect score on ${this.subject}`
    };
}

class Students extends Person {
    constructor(studentAttributes) {
        super(studentAttributes) 

        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listSubjects (favSubjectsArray) {
        return favSubjectsArray.forEach((subject) => {
            console.log(subject)
        })
    }

    PRAssignment (subject) {
        `${this.student} has submitted a PR for ${this.subject}`
    }

    sprintChallenge (subject) {
        `${this.student} has begun sprint challenge on ${this.subject}`
    }
}

class ProjectManagers extends Instructors {
    constructor (pmAttributes) {
        super(pmAttributes)

        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUp (channelName) {
        return `${this.name} announces to ${channelName}, @channel standy times!`
    }

    debugsCode (student) {
        return `${this.name} debugs ${student}'s code on ${this.subject }`
    }
}
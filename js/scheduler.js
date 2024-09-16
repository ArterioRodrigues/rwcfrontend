class CollegeCourse {
    name;
    id;
    tutors = new Set();
    sessions = {}; //key: day of week, value: list of sessions
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    addSession(session) {
        this.tutors.add(session.tutor.emplid)
        if (!(session.dayOfWeek in this.sessions)) {
            this.sessions[session.dayOfWeek] = new Set()

        }
        this.sessions[session.dayOfWeek].add(session)
    }
}

class Person {
    fname;
    lname;
    emplid;
    email;

    constructor(fname, lname, emplid, email) {
        this.fname = fname;
        this.lname = lname;
        this.emplid = emplid;
        this.email = email;
    }
}

class Student extends Person {
    constructor(fname, lname, emplid, email, availability) {
        super(fname, lname, emplid, email, availability);

    }
}

class Tutor extends Person {
    classIds = new Set();
    constructor(fname, lname, emplid, email, availability) {
        super(fname, lname, emplid, email, availability);
    }

    addCollegeCourse(CollegeCourse) {
        this.classIds.add(CollegeCourse)
    }
}

class TutoringSession {
    tutor;
    student;
    dayOfWeek;
    time;
    location;

    constructor(tutor, dayOfWeek, time, location) {
        this.tutor = tutor;
        this.dayOfWeek = dayOfWeek;
        this.time = time;
        this.location = location;
    }

    addStudent(student) {
        this.student = student
    }
}


class Scheduler {
    title;
    sessions = {}; //key:dayOfWeek, value: set of sessions for that day
    dayOfWeek;

    constructor(title) {
        this.title = title
    }

    setDayOfWeek() { }

    addSession(session) {
        console.log("sess")
        console.log(session)
        if (!(session.dayOfWeek in this.sessions)) {
            this.sessions[session.dayOfWeek] = new Set()

        }
        this.sessions[session.dayOfWeek].add(session)
    }

    displayDailySchedule() {
        //todo
    }
    displayTutorDailySchedule(tutor) {
        //todo
    }
    displayWeeklySchedule() {
        //todo
    }
    displayTutorWeeklySchedule(tutor) {
        //todo
    }

    deleteSession(session) {
        this.sessions[session.dayOfWeek].delete(session)
    }
}

const history = new CollegeCourse("history", 1)
console.log(history)

const student1 = new Student("Student1", "Student1", "s1", "Student1@email.com")
console.log(student1)

const teacher1 = new Tutor("Tutor1", "Tutor1", "t1", "tutor@email.com")
console.log(teacher1)

teacher1.addCollegeCourse(history)
console.log(teacher1)

historySession = new TutoringSession(teacher1, 0, 0, "hunter")
historySession.addStudent(student1)
console.log(historySession)

history.addSession(historySession)
console.log(history)


fall2024 = new Scheduler("Fall 2024")
fall2024.addSession(historySession)
console.log(fall2024)


//fall2024.deleteSession(historySession)
//console.log(fall2024)
//delete historySession



















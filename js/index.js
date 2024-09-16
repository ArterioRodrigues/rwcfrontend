function changeButton(button) {
    if (button.classList.contains("clicked"))
        button.classList.remove("clicked");
    else
        button.classList.add("clicked");
}


const currentPath = window.location.pathname;
let student_loadded = true;
let tutor_loadded = true;
let index_loadded = true;

const students_list = {};
const tutors_list = {}



if (currentPath.includes('tutor') && tutor_loadded) {
    const tutor_form = document.getElementById('tutor-form');
    const handleSubmitEvent = function(event){
        console.log(event);
        event.preventDefault();

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const grade = document.getElementById('grade').value;
        const tutor_class = document.getElementById('class').value;
        const time_selected = document.getElementsByClassName('clicked');

        console.log(name)
        console.log(email)
        console.log(tutor_class)
        console.log(time_selected)

        let student = {
            name: name,
            email: email,
            grade: grade,
            tutor_class: tutor_class,
            time_selected: time_selected,
        }
        tutors_list[name] = student
        console.log(tutors_list)

        localStorage.setItem('tutors_list', JSON.stringify(tutors_list));
        alert('Tutor added to list');
    };

    tutor_form.addEventListener('submit', handleSubmitEvent);

    tutor_loadded = false;
    index_loadded = true;
}
if (currentPath.includes('student') && student_loadded){
    console.log('student')
    const student_form = document.getElementById('student-form');

    const handleSubmitEvent = function(event){
        console.log(event);
        event.preventDefault();

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const tutor_class = document.getElementById('class').value;
        const time_selected = document.getElementsByClassName('clicked');

        console.log(name)
        console.log(email)
        console.log(tutor_class)
        console.log(time_selected)

        let student = {
            name: name,
            email: email,
            tutor_class: tutor_class,
            time_selected: time_selected,
        }
        students_list[name] = student
        console.log(students_list)

        localStorage.setItem('students_list', JSON.stringify(students_list));
        alert('Student added to list');
    };
    student_form.addEventListener('submit', handleSubmitEvent);
    student_loadded = false;
    index_loadded = true;
}

function displayData(dic, id) {

    const outputContainer = document.getElementById(id);
    outputContainer.innerHTML = "";

    console.log(dic)
    for(item in  dic){

        const content = document.createElement('div');
        const name = document.createElement('h3');
        name.textContent = item;
        content.append(name);

        for(key in dic[item]){
            const key_val = document.createElement('p');
            key_val.textContent = key + ': ' + dic[item][key];
            
            content.appendChild(key_val);
        }
        
        outputContainer.appendChild(content);
    }
    index_loadded = false;
}

if (currentPath.includes('index')){
    const tutors_list = localStorage.getItem('tutors_list');
    const students_list = localStorage.getItem('students_list');
    displayData(JSON.parse(students_list), 'student_result');
    displayData(JSON.parse(tutors_list), 'tutor_result');
    
}

console.log(currentPath)
if (localStorage.getItem('login') == null) {
    window.location.href = 'index.html';
}

let [login_user] = JSON.parse(localStorage.getItem('login'));


function init() {

    if (!localStorage.getItem("courses")) {
        localStorage.setItem("courses", "[]");
    }
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", "[]");
    }

}

// const user_name = login_user[username]
console.log(login_user.username)

user_name = login_user.username;

// for show and hide courses and students
function showCourses() {
    course_container.style.display = "";
    student_container.style.display = "none";
}

function showStudents() {
    student_container.style.display = ""
    course_container.style.display = "none";
}

render = () => { //for show student and courses
    init()
    document.getElementById("nav_admin").innerHTML = `${login_user.username}(Admin)`;


    const courses = JSON.parse(localStorage.getItem("courses"));
    let list = '<div class="row ">';
    for (course in courses) {
        list = + `<div class=" col-3 mb-2"> <div class=" course">${courses[course]}</div></div>`;
    }
    list += '</div>'

    document.getElementById("list_Courses").innerHTML = list;
    // for students 
    const users = JSON.parse(localStorage.getItem("users"));
    let list2 = '<ul class="list-group" >';

    for (let user of users) {
        list = '<ul class="list">';

        for (course in courses) {
            list += `<li class="list-group-item student_course_item inline">
            ${courses[course]}
            <div class="course_asign_revoke_btn ">
            <button class=" btn-primary" id='assign${user.username}${course}' onclick=assigncourses('${user.username}','${course}') style="display:'';">assign</button>
            <button class=" btn-danger" id="revoke${user.username}${course}" onclick=revokecourses('${user.username}',${course}) style="display:'';">revoke</button>
            </li>`
        }
        list += `</ul>`
        console.log(user.course);

        list2 += `<li class="list-group-item student_courses_li">${user.username}&nbsp&nbsp&nbsp
            <button class = " btn-primary student_course_detailBtn" onclick="student_details('${user.username}', '${user.course}')">details</button>
            <div id = "${user.username}id" style = "display:none;">
            ${list}
            </div>
            </li>`;
    }
    list2 += `</ul>`
    document.getElementById("list_students").innerHTML = list2;
}

function addCourse(name) {
    const courses = JSON.parse(localStorage.getItem("courses"));
    let flag = true;
    for (course in courses) {
        if (courses[course] === name) {
            flag = false;
            alert("Course already exist!");
            break;
        }
    }
    if (flag && name != "") {
        courses.push(name);
        localStorage.setItem("courses", JSON.stringify(courses));
        alert("Course added successfully");
        let listOfvourses = '<div class="row ">';
        for (course in courses) {
            listOfvourses += `<div class="col-3 mb-4"><div class=" course">${courses[course]}</div></div>`;
        }
        listOfvourses += `</div>`
        document.getElementById("list_Courses").innerHTML = listOfvourses;
        document.getElementById("course").value = "";
    }
}

function assigncourses(name, course) {
    let users = localStorage.getItem("users");
    const courses = JSON.parse(localStorage.getItem("courses"));
    users = JSON.parse(users);
    for (user in users) {
        if (users[user].username === name) {
            users[user].course.push(courses[course]);
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById(`assign${name}${course}`).style.display = "none";
            document.getElementById(`revoke${name}${course}`).style.display = "";
            alert("course assigned");
            location.reload();
        }
    }
}

function revokecourses(name, course) {
    let users = localStorage.getItem("users");
    const courses = JSON.parse(localStorage.getItem("courses"));
    users = JSON.parse(users);
    for (user in users) {
        if (users[user].username === name) {
            const index = users[user].course.indexOf(courses[course]);
            users[user].course.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById(`assign${name}${course}`).style.display = "";
            document.getElementById(`revoke${name}${course}`).style.display = "none";
            alert("course revoked");
            location.reload();
        }
    }
}

function student_details(name, stu_courses) {
    const courses = JSON.parse(localStorage.getItem("courses"));
    for (let course in courses) {
        if (stu_courses.indexOf(courses[course]) > -1) {
            document.getElementById(`assign${name}${course}`).style.display = 'none';
            document.getElementById(`revoke${name}${course}`).style.display = '';
        } else {
            document.getElementById(`assign${name}${course}`).style.display = ''
            document.getElementById(`revoke${name}${course}`).style.display = 'none';
        }
    }
    if (document.getElementById(`${name}id`).style.display === "none") {
        document.getElementById(`${name}id`).style.display = "";
    }
    else
        document.getElementById(`${name}id`).style.display = "none";
}

function whipuser() {
    usersss = localStorage.getItem("users")
    var userselection = confirm("Are you sure you want to remoce all users permanently?");

    if (userselection == true) {
        localStorage.setItem("users", "[]")
        alert("users deleted!");
    }
    else {
        alert("users are not deleted!");
    }
    document.location.reload()
    
}
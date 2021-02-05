if(localStorage.getItem('login') == null){
    window.location.href = 'index.html';
}

user_name_user = login_user.username;

function inituser(){

}

function renderCourses(){
    document.getElementById("userName").innerHTML = `${user_name_user}`;
    let users = localStorage.getItem("users");
    users = JSON.parse(users);
    let courses;
    for(user in users){
        if(users[user].username == user_name_user){
            courses = users[user].course;
            console.log(courses);
            break;
        }
    }
    let list = '<div class="row">';
    for(course in courses){
        
        list += `<div class="col-12 mb-3"><div class="course">  ${courses[course]}</div></div>`
    }
    list+="</div>";
    document.getElementById("listOfCourses").innerHTML = list;
}
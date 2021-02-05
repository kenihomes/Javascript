let user_name
let password
let user_type
let validationFlag
let users
let admins


if (localStorage.getItem('login')) {
    localStorage.removeItem('login');
}

init = () => {
    user_name = document.getElementById("userName").value
    password = document.getElementById("password").value
    user_type = document.getElementsByName('UserType')
    validationFlag = true

    if(user_type[1].checked){
         users = JSON.parse(localStorage.getItem("users"));
    }
    if(user_type[0].checked){
         admins = JSON.parse(localStorage.getItem("admins"));
    }
}

function login() {
    init()

    if (user_name == null) {
        alert("Please enter somthing");
        validationFlag = false;
    }
    if (password == null) {
        alert("Please enter somthing in password");
        validationFlag = false;
    }

    if(validationFlag)
    if(user_type[1].checked){
        let flag = true;
        for(let user in users){
            console.log(user);
            if(users[user].username === user_name && users[user].password === password){
                alert("login success");
                const userTokan = JSON.stringify([{username:user_name, type:'user'}]);
                window.localStorage.setItem("login",userTokan);
                window.location = window.location = './user.html?username=' + user_name;
                flag = false;
                break;
            }
        }
        if(flag){
            alert("enter valid user name and password");

        }
    }

    if(user_type[0].checked){
        let flag = true;
        for(admin in admins){
            if(admins[admin].username === user_name && admins[admin].password === password){
                alert("login success");
                localStorage.setItem("login",{username:user_name, type:'admin'}); 
                const userTokan = JSON.stringify([{username:user_name, type:'user'}]);
                window.localStorage.setItem("login",userTokan);
                window.location = window.location = './admin.html?username=' + user_name;
                flag = false;
                break;
            }
        }
        if(flag){
            alert("enter valid user name and password");
            return false;
        }
    }


}


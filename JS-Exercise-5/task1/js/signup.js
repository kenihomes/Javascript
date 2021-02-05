
let user_name
let password
let comfirm_password
let user_type
let user_type_str = ''
let newUser = {}
let users= JSON.parse(localStorage.getItem("users"))
let admins= JSON.parse(localStorage.getItem("admins"))

function init() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", "[]");
    }
    if (!localStorage.getItem("admins")) {
        localStorage.setItem("admins", "[]");
    }

     user_name = document.getElementById("userName").value
     password = document.getElementById("password").value;
     comfirm_password = document.getElementById("comfirmPassword").value;
     user_type = document.getElementsByName("UserType")
    console.log (user_name)
}
generateUser = () => {

        newUser = {
        username: user_name,
        password: password,
        userType: `${user_type_str}`,
        course: []
    };
    console.log ("genret")
}

checkUser = (flag) => { 
    flag = true;

    if (user_name == null || user_name.length < 3) {
        alert("Please enter your username ,length must be greater then 3 ");
        return false;
    }
    if (password == null || password.length < 5) {
        alert("Please enter your password ,length must be greater then 5");
        return false;
    }
    if (comfirm_password != password) {
        alert('password didnt match');
        return false;
    }

    if (user_type[1].checked) {
        user_type_str = "user"
        
        
        for (user in users) {
            console.log(user);
            if (users[user].username === user_name) {
                alert("can not creat same user!");
                flag = false;
                break;

            }
        }
        return flag;
    }

    if (user_type[0].checked) {
        user_type_str = "admin"
        
        for (admin in admins) {
            console.log(admin);
            if (admins[admin].username === user_name) {
                alert("can not creat same user!");
                flag = false;
                break;
            }
        }
        return flag;
    }
}

function Signup() {
    init()
   let flag =  checkUser()
    if(flag == false ){
        return
    }
    generateUser()
    if (flag = true && user_type[0].checked) {
        admins.push(newUser);
        localStorage.setItem("admins", JSON.stringify(admins));
        alert("Registered successfylly!");

    }
    if (flag = true && user_type[1].checked) {
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registered successfylly!");
    }
}

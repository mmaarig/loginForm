let page = location.href.split("/");
page = page[page.length - 1];


let users = []
let loggedin = []
function getAllUsers() {
    let userInStringForm = localStorage.getItem("users");
    let loggedinForm = localStorage.getItem("logged in");
    users = JSON.parse(userInStringForm) || [];
    loggedin = JSON.parse(loggedinForm) || {};
    console.log(users);
    console.log(loggedin);
}
getAllUsers();


// Function for homepage data loading
function dashboard() {
    if (page === "dashboard.html") {

        let userName = document.getElementById('userName');
        let userEmail = document.getElementById('userEmail');
        let userGender = document.getElementById('userGender');
        let userAddress = document.getElementById('userAddress');
        let userCity = document.getElementById('userCity');

        

        userName.innerText =  loggedin.user_firstname;
        userEmail.innerText =  loggedin.user_email;
        userGender.innerText =  loggedin.user_gender;
        userAddress.innerText =  loggedin.user_address;
        userCity.innerText =  loggedin.user_City;
        console.log("loggedin.user_firstname: ", loggedin);
    }
}
dashboard();



// Login checks
// function logincheck() {
//     let logindata = localStorage.getItem("logged in");

//     if (page === "login.html" || page === "index.html") {

//         if (logindata) {
//             window.location.href = "./home.html";
//         }

//     } else {
//         if (!logindata) {
//             window.location.href = "./login.html";
//         }
//     }

//     console.log(logindata);
//     console.log(location.href);
// }
// logincheck();


// function signupCheck() {
//     let signupdata = localStorage.getItem("users");

//     if (page === "index.html") {
            
//             if (signupdata) {
//                 window.location.href = "./login.html";
//             }
    
//         } else {
//             if (!signupdata) {
//                 window.location.href = "./index.html";
//             }
//         }
// }
// signupCheck();



// Function for signup
function signup() {
    let firstname = document.getElementById('firstname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmpassword = document.getElementById('confirmpassword'); 
    let gender = document.getElementById('gender');
    let address = document.getElementById('address');
    let city = document.getElementById('city');

    if (password.value === confirmpassword.value) {
        let newUser = {
            user_firstname: firstname.value,
            user_email: email.value,
            user_password: password.value,
            user_gender: gender.value,
            user_address: address.value,
            user_city: city.value,
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].user_email === email.value) {
                alert("Email already exists");
                return;
            }
        }
        users.push(newUser)

        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "./index.html";
    }
    else {
        alert("Password does not match");
    }
}


// Function for user login
function login() {
    let login_email = document.getElementById('login_email');
    let login_password = document.getElementById('login_password');

    for (let i = 0; i < users.length; i++) {
        if (users[i].user_password == login_password.value && users[i].user_email == login_email.value) {
            localStorage.setItem("logged in", JSON.stringify(users[i]))
            window.location.href = "./dashboard.html";
            break
        }
        else if (users[i].user_password !== login_password.value && users[i].user_email !== login_email.value) {
        }
    }
}


// Function for user logout
function logout() {
    localStorage.removeItem("logged in");
    window.location.href = "./index.html";    
}
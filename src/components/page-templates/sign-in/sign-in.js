import './popup'

const registeredUsers = [
    {
        login:'Julia',
        password:'12345',
        url: ''
    },
    {
        login:'Dima',
        password:'12345',
        url: ''
    },
];
console.log(registeredUsers);
const loginButton = document.querySelector('.login');
const registrationButton = document.querySelector('.register');

const loginEmail = document.querySelector('.login-email');
const loginPassword = document.querySelector('.login-password');

const registerEmail = document.querySelector('.registration-email');
const registerPassword = document.querySelector('.registration-password');
const registerUrl = document.querySelector('.registration-url');



// const url = document.querySelector('.url').value;
//
//
//
loginButton.addEventListener('click', ()=>{
    const userEmail = loginEmail.value;
    const userPassword = loginPassword.value;
    let isRegistered = false;
    registeredUsers.forEach(user => {
        console.log(userEmail ,userPassword);
        if(user.login === loginEmail.value &&  user.password === loginPassword.value) {
            alert('ok');
            isRegistered = true;
        }
    });
    if(isRegistered === true)
        document.getElementById('loginForm').submit();
    else alert('Login or password doesn`t fit. Register, please');
});
registrationButton.addEventListener('click', ()=>{
    console.log('reg');
    const newUser = {};
    newUser.login = registerEmail.value;
    newUser.password = registerPassword.value;
    newUser.url = registerUrl.value;
    registeredUsers.push(newUser);
    document.getElementById('regForm').submit();
    console.log(registeredUsers);
});


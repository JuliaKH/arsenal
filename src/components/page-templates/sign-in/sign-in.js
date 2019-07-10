import './sign-in.sass'

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

const submitBtn = document.querySelector('.submit');
const email = document.querySelector('.email');
const password = document.getElementsByClassName('psw')[0];
const url = document.querySelector('.url').value;

submitBtn.addEventListener('click',(event) => {
    let isRegistered = false;
    //Log in
    if(event.target.classList.contains('login')){
        registeredUsers.forEach(user => {
            console.log(email.value ,password.value);
            if(user.login === email.value &&  user.password === password.value) {
                console.log('ok');
                isRegistered = true;
            }
        });
        if(isRegistered === true)
            document.getElementById('regForm').submit();
        else alert('Login or password doesn`t fit. Register, please');
    }
    //Registration
    if (event.target.classList.contains('registration')){
        console.log('reg');
        const obj = {};
        obj.login = email.value;
        obj.password = password.value;
        obj.url = url;
        registeredUsers.push(obj);
        document.getElementById('regForm').submit();
        console.log(registeredUsers);
    }
});
submitBtn.onclick = (event) => {
    let isRegistered = false;
    //Log in
    if(event.target.classList.contains('login')){
        registeredUsers.forEach(user => {
            console.log(email.value ,password.value);
            if(user.login === email.value &&  user.password === password.value) {
                console.log('ok');
                isRegistered = true;
            }
        });
        if(isRegistered === true)
            document.getElementById('regForm').submit();
        else alert('Login or password doesn`t fit. Register, please');
    }
    //Registration
    if (event.target.classList.contains('registration')){
        console.log('reg');
        const obj = {};
        obj.login = email.value;
        obj.password = password.value;
        obj.url = url;
        registeredUsers.push(obj);
        document.getElementById('regForm').submit();
        console.log(registeredUsers);
    }
};


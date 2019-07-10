import './sign-in.sass'

import './popup'

let registered_users = [
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
console.log(registered_users);

let submitBtn = document.getElementsByClassName('submit')[0];
let email_input = document.getElementsByName('email');
let passw_input = document.getElementsByName('psw');
let url_input = document.getElementsByName('url');

submitBtn.onclick = (event) => {
    let isRegistered = false;
    //Log in
    if(event.target.classList.contains('login')){
        // console.log('log');
        registered_users.forEach(function(obj) {
            for (let i = 0; i < email_input.length; i++){
                if (obj.login === email_input[i].value && obj.password === passw_input[i].value){
                    console.log('ok');
                    isRegistered = true;
                }
            }
        });
        if(isRegistered === true)
            document.getElementById("regForm").submit();
        else alert('Login or password doesn`t fit. Register, please');
    }
    //Registration
    if (event.target.classList.contains('registration')){
        console.log('reg');
        let obj = {};
        obj.login = email_input[0].value;
        obj.password = passw_input[0].value;
        obj.url = url_input[0].value;
        registered_users.push(obj);
        document.getElementById("regForm").submit();
        // registered_users.login.push = email_input[0].value;
        console.log(registered_users);
    }
};


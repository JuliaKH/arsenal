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

document.querySelector('.login').addEventListener('click', ()=>{
    const userEmail = document.querySelector('.login-email').value;
    const userPassword = document.querySelector('.login-password').value;
    let isRegistered = false;
    registeredUsers.forEach(({ login, password }) => {
        if(login === userEmail &&  password === userPassword) {
            alert('ok');
            isRegistered = true;
        }
    });
    if(isRegistered === true)
        document.getElementById('loginForm').submit();
    else alert('Login or password doesn`t fit. Register, please');
});
document.querySelector('.register').addEventListener('click', ()=>{
    const   newUser = {},
            registerEmail = document.querySelector('.registration-email').value,
            registerPassword = document.querySelector('.registration-password').value,
            registerUrl = document.querySelector('.registration-url').value;

    newUser.login = registerEmail;
    newUser.password = registerPassword;
    newUser.url = registerUrl;
    registeredUsers.push(newUser);
    document.querySelector('.avatar').src = registerUrl;
    document.querySelector('.authorization-button').innerHTML = registerEmail
    document.querySelector('.authorization-form-container').classList.remove('is-active');
    // document.getElementById('registrationForm').submit();
});


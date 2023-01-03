const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const loginButton = document.getElementById('login_home');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>{
 container.classList.remove('right-panel-active')
});

loginButton.addEventListener('click', () =>{
    window.location.assign('../../home.html')
    });
// Create Menu

const mainMenu = document.querySelectorAll('.mainMenu');

function createMenuItem(){

    const menuItems = [
        {
            menuName: 'Forside',
            menuHref: 'index.html'
        },
        {
            menuName: 'Info',
            menuHref: 'info.html'
        },
        {
            menuName: 'Kontakt',
            menuHref: 'kontakt.html'
        },
        {
            menuName: 'Login',
            menuHref: 'login.html'
        }
    ];

    menuItems.forEach((menuItem) => {

        const li = document.createElement('li');

        li.innerHTML = `<a href="${menuItem.menuHref}">${menuItem.menuName}</a>`;

        if (mainMenu && mainMenu.length > 0){
            for(let i = 0; mainMenu.length > i; i++){
                mainMenu[0].appendChild(li);
            }
        }
    });
}

createMenuItem();

// Toggle Mobile Menu

function toggleClass(){

    if(mainMenu && mainMenu.length > 0){
        for(let i = 0; mainMenu.length > i; i++){
            mainMenu[0].classList.toggle('expanded');
        }
    }
}

let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', toggleClass);

// Contact Form

function getFormData(){

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let besked = document.getElementById('besked');
    let nameSpan = document.getElementById('nameSpan');
    let emailSpan = document.getElementById('emailSpan');
    let beskedSpan = document.getElementById('beskedSpan');

    nameSpan.classList.remove('show');
    emailSpan.classList.remove('show');
    beskedSpan.classList.remove('show');

    if (!name.value){
        nameSpan.classList.add('show');
    }

    if (!email.value){
        emailSpan.classList.add('show');
    }

    if (!besked.value){
        beskedSpan.classList.add('show');
    }

    else{
        alert(`Hej ${name.value} tak for din besked, hvor du skrev: ${besked.value}. Vi vender tilbage til dig på din email ${email.value} snarest muligt`);

        name.value = '';
        email.value = '';
        besked.value = '';
    }
}

let submit = document.getElementById('submitMsg');

if(submit){
    submit.addEventListener('click', getFormData);
} else {
    console.log('The id sumbitMsg doest not exist');
}

// Login

const loginForm = document.querySelector('#loginForm');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginMsg = document.querySelector('.loginMsg');

function onSubmit(e){
    e.preventDefault();

    if(!username.value || !password.value){

        loginMsg.classList.add('error');
        loginMsg.textContent = 'Udfyld venligst begge felter';

    } else{
        alert('Du er nu logget ind');
        loginMsg.classList.remove('error');
        loginMsg.textContent = '';
        username.value = '';
        password.value = '';
    }
}

if(loginForm){
    loginForm.addEventListener('submit', onSubmit);
} else{
    console.log('The id loginForm does not exist');
}
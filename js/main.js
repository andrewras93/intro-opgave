// Create Menu

const mainMenu = document.querySelectorAll('.mainMenu');

function createMenuItem(){
    //const li = document.createElement('li');
    //const menuItems = ['Forside', 'Info', 'Kontakt', 'Login'];
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

    console.log(menuItems);
    menuItems.forEach((menuItem) => {
        //console.log(menuItem);
        const li = document.createElement('li');
        //console.log(li);
        li.innerHTML = `<a href="${menuItem.menuHref}">${menuItem.menuName}</a>`;
        //console.log(li);
        if (mainMenu && mainMenu.length > 0){
            for(let i = 0; mainMenu.length > i; i++){
                mainMenu[0].appendChild(li);
                console.log(mainMenu[0]);
            }
        }
    });

    //li.innerHTML = '<a href=login.html>Login</a>';

    //mainMenu[0].appendChild(li);
    /*if(mainMenu && mainMenu.length > 0){
        for(let i = 0; mainMenu.length > i; i++){
            mainMenu[0].appendChild(li);
        }
    }*/
}

createMenuItem();

// Toggle Mobile Menu

function toggleClass(){

    //let menu = document.getElementsByClassName('mainMenu');

    if(mainMenu && mainMenu.length > 0){
        for(let i = 0; mainMenu.length > i; i++){
            mainMenu[0].classList.toggle('expanded');
        }
    }
}

let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', toggleClass);

// Contact Form

const currentURL = window.location.href;
console.log(currentURL);
if(currentURL === 'http://localhost:63342/intro-opgave/kontakt.html'){
    function getFormData(){

        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let besked = document.getElementById('besked');

        document.getElementById('nameSpan').classList.remove('show');
        document.getElementById('emailSpan').classList.remove('show');
        document.getElementById('beskedSpan').classList.remove('show');

        if (!name.value){
            document.getElementById('nameSpan').classList.add('show');
        }

        if (!email.value){
            document.getElementById('emailSpan').classList.add('show');
        }

        if (!besked.value){
            document.getElementById('beskedSpan').classList.add('show');
        }

        else{
            alert(`Hej ${name.value} tak for din besked, hvor du skrev: ${besked.value}. Vi vender tilbage til dig på din email ${email.value} snarest muligt`);

            name.value = '';
            email.value = '';
            besked.value = '';
        }
    }

    let submit = document.getElementById('submitMsg');

    submit.addEventListener('click', getFormData);
}

// Login

if(currentURL === 'http://localhost:63342/intro-opgave/login.html'){

    const loginForm = document.querySelector('#loginForm');
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    function onSubmit(e){
        e.preventDefault();

        if(!username.value || !password.value){
            console.log('error');
        } else{
            window.location.replace("http://localhost:63342/intro-opgave/index.html");
        }
    }

    loginForm.addEventListener('submit', onSubmit);
}
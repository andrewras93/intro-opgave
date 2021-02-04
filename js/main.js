// Create Menu

const mainMenu = document.querySelectorAll('.mainMenu');

function createMenuItem(){
    const li = document.createElement('li');

    li.innerHTML = '<a href=login.html>Login</a>';

    //mainMenu[0].appendChild(li);
    if(mainMenu && mainMenu.length > 0){
        for(let i = 0; mainMenu.length > i; i++){
            mainMenu[0].appendChild(li);
        }
    }
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
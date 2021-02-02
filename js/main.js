// Toggle Mobile Menu

function toggleClass(){

    let menu = document.querySelector('.mainMenu');

    menu.classList.toggle('expanded');

}

let hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', toggleClass);

// Contact Form

function getFormData(){

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let besked = document.querySelector('#besked').value;

    alert('Hej ' + name + ' tak for din besked, hvor du skrev: ' + besked +
    '. Vi vender tilbage til dig på din email ' + email + ' snarest muligt.');

}

let submit = document.querySelector('#submitMsg');

submit.addEventListener('click', getFormData);
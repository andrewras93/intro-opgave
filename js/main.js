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

    if (name === ''){
        document.querySelector('#nameSpan').classList.add('show');
    }

    if (email === ''){
        document.querySelector('#emailSpan').classList.add('show');
    }

    if (besked === ''){
        document.querySelector('#beskedSpan').classList.add('show');
    }

    else{
        alert('Hej ' + name + ' tak for din besked, hvor du skrev: ' + besked +
        '. Vi vender tilbage til dig på din email ' + email + ' snarest muligt.');

        location.reload();
        return false;
    }

}

let submit = document.querySelector('#submitMsg');

submit.addEventListener('click', getFormData);
function toggleClass(){

    let menu = document.querySelector('.mainMenu');

    menu.classList.toggle('expanded');

}

let hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', toggleClass);
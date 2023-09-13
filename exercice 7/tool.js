
let run = function(){
    document.querySelector("strong").textContent = tallest;
};

let button = document.querySelector('input[type=button]');
button.style.marginBottom='2em';

button.addEventListener('click', run);
// Script for Dynamic Shopping List

let ul = document.querySelector('ul');
let input = document.querySelector('input');
let button = document.querySelector('button');
let msg = document.querySelector('.msg');

button.addEventListener('click', click);

function click(e) {
    e.preventDefault();

    if (input.value === '') {
        msg.classList.add('error'); 
        msg.style.display = 'block'
        msg.innerHTML = 'Please enter fields';
        setTimeout(() => msg.style.display = 'none', 3000);
    } else {
        const curentValue = input.value;
        input.value = '';
        
        let li = document.createElement('li');
        let span = document.createElement('span');
        let delButton = document.createElement('button');
    
        li.appendChild(span);
        li.appendChild(delButton);
    
    
        span.textContent = curentValue;
        delButton.textContent = 'Delete';
    
        ul.appendChild(li);
    
        delButton.addEventListener('click', function() {
            ul.removeChild(li);
        })
    
        focus();
    
    }
}


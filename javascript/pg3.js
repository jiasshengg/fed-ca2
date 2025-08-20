// form elements
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const text = document.getElementById('text-area');
const form = document.getElementById('form');
const errors = document.getElementById('error');

// for validation of form
function validateForm(e) {
    let messages = [];
    
    if (userName.value.trim() === "") {
        messages.push("Please fill up your name.");
    }

    if (email.value.trim() === "") {
        messages.push("Please fill up your email.");
    } else if (!email.value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        messages.push("Please enter a valid email.");
    }

    if (text.value.trim() === "") {
        messages.push("Please fill up your Personal Message/Wishes.");
    }

    if (messages.length > 0) {
        e.preventDefault();
        alert(messages.join('\n'));
    }
}


// add event listener to the form
form.addEventListener('submit', validateForm);

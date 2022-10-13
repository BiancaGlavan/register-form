// main form
const form = document.querySelector("#form");

// form fields
const username = document.querySelector('[name="username"]');
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');
const confirmpsw = document.querySelector('[name="confirmpsw"]');
const regions = document.querySelector('#regions');
const terms = document.querySelector('[name="terms"]');

// error fields
const username_error = document.querySelector('#username_error');
const email_error = document.querySelector('#email_error');
const password_error = document.querySelector('#password_error');
const confirmpsw_error = document.querySelector('#confirmpsw_error');
const regions_error = document.querySelector('#regions_error');
const terms_error = document.querySelector('#terms_error');


// validators
function isValidUsername() {

    let isValid = true;

    const name = username.value;
    if (name.length < 3) {
        username_error.innerHTML = 'Username must be longer than 3 characters!';
        isValid = false;
    }
    if (name.length > 30) {
        username_error.innerHTML = 'Username must be less than 30 characters!';
        isValid = false;
    }

    return isValid;
}

function isValidEmail() {

    const em = email.value;
    const re = /\S+@\S+\.\S+/;
    const isValid = re.test(em);
    if(!isValid) {
        email_error.innerHTML = 'You must use a valid email!';
    }
    return isValid;
}

function isValidPassword() {
    const pass = password.value;
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const isValid = re.test(pass);
    if(!isValid) {
        password_error.innerHTML = 'Password must contain between 6-20 chars, at least one numeric digit, one uppercase and one lowercase letter!'
    }
    return isValid;
}

function isValidConfirmpsw() {

    if(confirmpsw.value.length === 0) {
        confirmpsw_error.innerHTML = 'Field should not be empty!';
    }
    if(confirmpsw.value !== password.value && confirmpsw.value.length > 0) {
        confirmpsw_error.innerHTML = 'Passwords must match!';
    }
    if(confirmpsw_error.innerHTML === '') {
        return true;
    }
    return false;
}

function isValidRegion() {
    const region = regions.value;
    if(region === '') {
        regions_error.innerHTML = 'You must select a region!';
    }
    return region !== '';
}

function isValidTerms() {
    if(terms.checked === false) {
        terms_error.innerHTML = 'You must accept the terms!';
    } else {
        terms_error.innerHTML = '';
    }
    return terms.checked;
}


// add Event Listeners for fields that require validation


username.addEventListener('blur', function(ev) {
    isValidUsername();
});


// remove errors on input focus
username.addEventListener('focus', function(ev) {
    username_error.innerHTML = '';
});

email.addEventListener('focus', function(ev){
    email_error.innerHTML = '';
});

password.addEventListener('focus', function(ev){
    password_error.innerHTML = '';
});

confirmpsw.addEventListener('focus', function(ev){
    confirmpsw_error.innerHTML = '';
});

// remove errors after select input changes
regions.addEventListener('change', function(ev){
    regions_error.innerHTML = '';
});



// call validator functions when we leave the input
email.addEventListener('blur', isValidEmail);

password.addEventListener('blur', isValidPassword);

confirmpsw.addEventListener('blur', isValidConfirmpsw);



// handle the form submit
form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    let myFormData = new FormData(form);

    const user = {
        username: myFormData.get('username'),
        email: myFormData.get('email'),
        password: myFormData.get('password'),
        region: myFormData.get('regions'),
        sex: myFormData.get('sex')
    };

    
    if(isValidUsername() && isValidEmail() && isValidPassword() && isValidConfirmpsw() && isValidRegion() && isValidTerms()) {
        // if user data is valid do something with user object
        console.log(user);
    }
});



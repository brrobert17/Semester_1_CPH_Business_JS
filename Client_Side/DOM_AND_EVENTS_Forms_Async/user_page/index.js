// Forms: Exercise
// ▪ Add a user button at the top right corner in the Header.
// ▪ Redirecting the user to a user.html sub page.
// ▪ Create a form, to be used for creating users on the page.
// ▪ What would be usefull when creating users?
// ▪ Atleast name, so we can get rid of the annoying popup each time
// we open the site.
// ▪ What would we need to validate?
// ▪ Lets create some JavaScript validation, and add custom error
// messages.

const email = document.querySelector('#input-email');
const username = document.querySelector('#input-username');
const password = document.querySelector('#input-password');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const usernameRegex = /^[a-z0-9._]{4,15}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

email.addEventListener('input', (e) => {
    e.target.classList = "";
    if (emailRegex.test(e.target.value)) {
        e.target.classList.add('valid-input');
    } else {
        e.target.classList.add('invalid-input');
    }
})
username.addEventListener('input', (e) => {
    e.target.classList = "";
    if (usernameRegex.test(e.target.value)) {
        e.target.classList.add('valid-input');
    } else {
        e.target.classList.add('invalid-input');
    }
})
password.addEventListener('input', (e) => {
    e.target.classList = "";
    if (passwordRegex.test(e.target.value)) {
        e.target.classList.add('valid-input');
    } else {
        e.target.classList.add('invalid-input');
    }
})
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    const signupForm = document.querySelector('form[action="signup.php"]');
    const loginForm = document.querySelector('form[action="login.php"]');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                event.preventDefault();
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                alert('Please fill out all fields.');
                event.preventDefault();
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                alert('Please fill out all fields.');
                event.preventDefault();
            }
        });
    }
});

const apiURL = 'https://dietapp-server.matheusrocha-mu.repl.co';

async function fetchUsers() {
    try {
        const response = await fetch(`${apiURL}/users`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON::', error);
    }
}

let users = [];

document.addEventListener("DOMContentLoaded", () => {
    fetchUsers().then((data) => {
        users = data;
    });

    console.log(users);

    document.addEventListener("submit", async (event) => {
        const login = document.getElementById('login');
        
        if (login.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch(`${apiURL}/users?username=${username}&password=${password}`);
                const userData = await response.json();

                if (userData.length > 0) {
                    const userId = userData[0].id;
                    localStorage.setItem('loggedInUser', userId);
                    alert("Login successful!");
                    window.location.href = 'diet.html';
                } else {
                    alert("Invalid username or password.");
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }

        } else {
            event.preventDefault();
            event.stopPropagation();
            login.classList.add('was-validated');
        }
    });
});
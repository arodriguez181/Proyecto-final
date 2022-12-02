const login = document.getElementById('addu')
login.addEventListener('click', () => {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let repassword = document.getElementById('re-password').value
    let result = {
        username: username,
        password: password,
        password_repeat: repassword

    }
    if (result == null) {
        console.log('Ingresa datos correctos')
    } else {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json", "Authorization", "token");

        var raw = JSON.stringify(result);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/api/sign-up", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                window.location.replace('../FRONT/login1.html')

            })
            .catch(error => console.log('error', error));
    }
})
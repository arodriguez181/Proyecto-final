const login = document.getElementById('addu')
login.addEventListener('click', () => {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    let result = {
        username: username,
        password: password,

    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json", "Authorization", "token");

    var raw = JSON.stringify(result);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',

    };

    let a = fetch("http://localhost:3000/api/login", requestOptions)
        .then(response => response.text())
        .then(result => {
            window.location.href = ('../FRONT/menu.html'),
                console.log(result)
        })
        .catch(error => console.log('error', error));
})
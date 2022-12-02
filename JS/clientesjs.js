const cliente = document.getElementById('addclientes')
cliente.addEventListener('click', () => {
    let clientes = document.getElementById('clientes');
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value
    let telefono = document.getElementById('telefono').value
    let email = document.getElementById('email').value
    let edad = document.getElementById('edad').value;
    let result2 = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        edad: edad
    }


    console.log(result2)
    fetch('http://localhost:3000/api/clientes/', {
            method: 'POST',
            body: JSON.stringify(result2),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => {
            console.log(resultado)

        })
    clientes.innerHTML += 'Se inserto';
})
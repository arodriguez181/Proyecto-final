const prodcuto = document.getElementById('addpro')
prodcuto.addEventListener('click', () => {
    let detalles = document.getElementById('detalles')
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value
    let precio = document.getElementById('precio').value
    let result2 = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,

    }
    console.log(result2)
    fetch('http://localhost:3000/api/productos/', {
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
    detalles.innerHTML += 'Se inserto producto'
})
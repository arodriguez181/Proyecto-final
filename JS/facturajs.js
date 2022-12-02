const cliente = document.getElementById('addfac')
cliente.addEventListener('click', () => {

    let id_cliente = document.getElementById('id_cliente').value;

    let result2 = {

        id_cliente: id_cliente
    }
    fetch('http://localhost:3000/api/facturas/', {
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
})
const dep = document.getElementById('btnPro');
dep.addEventListener('click', () => {
    let cadena = "";
    let total = document.getElementById('morepro').value;
    for (i = 0; i < total; i++)
        cadena = cadena + ` 
            <form class="form">
            <label for="campo_${i}">ID Producto<br>
            <input id="campo_${i}">
            </label>
            <label for="campo${i}">Cantidad
            <input id="campo_e${i}">
            <label for="campo${i}">Precio
            <input id="campo_p${i}">
            </label>
            </form>`
    document.getElementById('campos').innerHTML = cadena;
})
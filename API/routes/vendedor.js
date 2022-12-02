let router = require('express').Router();
let vendedorController = require('../controllers/vendedorController');

router.get('/', (req, res) => {
    /* let respuesta = { tipo: 20, msg: 'Listado de contactos' }
     res.json(respuesta)*/
    vendedorController.listar(req, res)
})

router.get('/:id', (req, res) => {
    console.log(req.params.idcon);
    /* let respuesta = { tipo: 20, msg: 'Buscando un solo contacto', id: req.params.idcon }
     res.json(respuesta)*/
    vendedorController.buscar(req, res)
})

router.post('/', (req, res) => {

    /*if (!edad && !celular && !email && !activo && !nombre) {
        console.log(req.body);
        res.json(respuesta)

    }*/

    vendedorController.crear(req, res)
        //res.json(respuesta);

})


router.delete('/:id', (req, res) => {
    vendedorController.borrar(req, res)
})
module.exports = router
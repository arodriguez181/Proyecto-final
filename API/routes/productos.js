let router = require('express').Router();

const productoController = require('../controllers/productoController');

router.get('/', (req, res) => {
    /* let respuesta = { tipo: 20, msg: 'Listado de contactos' }
     res.json(respuesta)*/
    productoController.listar(req, res)
})

router.get('/:id', (req, res) => {
    console.log(req.params.idcon);
    /* let respuesta = { tipo: 20, msg: 'Buscando un solo contacto', id: req.params.idcon }
     res.json(respuesta)*/
    productoController.buscar(req, res)
})

router.post('/', (req, res) => {

    /*if (!edad && !celular && !email && !activo && !nombre) {
        console.log(req.body);
        res.json(respuesta)

    }*/

    productoController.crear(req, res)
        //res.json(respuesta);

})


router.delete('/:id', (req, res) => {
    productoController.borrar(req, res)
})
module.exports = router
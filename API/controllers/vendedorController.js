let mysql = require('../../db/database.js')
module.exports = {
    crear: (req, res) => {
        mysql.query(`INSERT INTO vendedores (nombre,apellido,edad,telefono) VALUES('${req.body.nombre}','${req.body.apellido}','${req.body.edad}','${req.body.telefono}')`, (error, results, fields) => {
            if (error) {
                console.log(error)
            } else {

                console.log({ msg: 'Se añadio un vendedor' })


            }
        })
    }
}
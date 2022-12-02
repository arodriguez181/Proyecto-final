let mysql = require('../../db/database.js')
module.exports = {
    crear: (req, res) => {
        mysql.query(`INSERT INTO productos (nombre,descripcion,precio) VALUES('${req.body.nombre}','${req.body.descripcion}','${req.body.precio}')`, (error, results, fields) => {
            if (error) {
                console.log(error)
            } else {
                console.log({ msg: 'Se inserto un producto' })
            }
        })
    }
}
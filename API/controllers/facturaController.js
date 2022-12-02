let mysql = require('../../db/database.js')
module.exports = {
    crear: (req, res) => {
        mysql.query(`INSERT INTO factura (fecha,id_cliente) VALUES('${req.body.id_cliente}')`, (error, results, fields) => {
            if (error) {
                console.log(error)
            } else {
                const nofactura = result.insertId
                res.json(nofactura)
                req.body.producto.array.forEach(element => {
                    mysql.query(`INSERT INTO detallesfactura(id_producto,cantidad,costo,id_factura) VALUES('${req.body.idproducto},${req.body.cantidad},${req.body.precio},${req.body.id_factura})`, (error, results) => {
                        mysql.query(`UPDATE producto SET cantidad=(cantidad-${cantidad}) WHERE id=id_producto`)
                    })
                });
                console.log(results)
            }
        })
    }
}
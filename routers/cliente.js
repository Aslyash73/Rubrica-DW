const express = require("express");
const ClienteServices = require("../services/cliente")
const clienteApi = (app) => {
const router = express.Router();
const clienteServices = new ClienteServices();
    app.use("/cliente", router)
//http://localhost:5000/cliente/
     router.get("/:idcliente", async function (req, res, next) {
        const { idcliente } = req.params;
        try {
            const cliente = await clienteServices.getOne(idcliente);
            res.status(200).json({
                cliente,
                msg: cliente ?
                    'auto fue encontrado' :
                    'no se encontro ningun cliente'
            });
        } catch (error) {
            next(error);
        }
    });


    router.get("/", async function (res, next) {
        try {
            const cliente = await clienteServices.getAll();
            res.status(200).json({
                cliente,
                msg: autos.length > 0 ?
                    'cliente fue encontrado' :
                    'no se encontro ningun cliente'
            });
        } catch (error) {
            next(error);
        }
    });

 router.post("/createCliente", async function (req, res, next) {
        const { body: data } = req;
        try {
            const cliente = await clienteServices.create(data);
            res.status(200).json({
                cliente,
                msg: cliente ?
                    'cliente fue encontrado' :
                    'no se encontro ningun cliente'
            });
        } catch (error) {
            next(error);
        }
    });

    router.put("/update/:idCliente", async function (req, res, next) {
        const { body: data } = req;
        const { idCliente } = req.params;
        try {
            const cliente = await clienteServices.update(data, idCliente);
            res.status(200).json({
                cliente,
                msg: cliente ?
                    'auto fue encontrado' :
                    'no se encontro ningun auto'
            });
        } catch (error) {
            next(error);
        }
    });
    router.post("/deleteCliente", async function (req, res, next) {
        const { body: data } = req;
        try {
            const cliente = await clienteServices.delete(data);
            res.status(200).json({
                cliente,
                msg: cliente ?
                    'auto encontrado' :
                    'no se encontro ningun auto'
            });
        } catch (error) {
            next(error);
        }
    });
}
module.exports = clienteApi;
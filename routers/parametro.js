const express = require("express");
const ParametroServices = require("../services/parametro")
const parametroApi = (app) => {
    const parametroServices= new ParametroServices();
    const router = express.Router();
    app.use("/parametro", router)
    //http://localhost:5000/parametro/
    router.get("/:idparametro", async function (req, res, next) {
        const { idParametro } = req.params;
        try {
            const parametro = await parametroServices.getOne(idParametro);
            res.status(200).json({
                parametro,
                msg: parametro ?
                    'parametro fue encontrado' :
                    'no se encontro ningun parametro'
            });
        } catch (error) {
            next(error);
        }
    });


    router.get("/", async function (req,res,next) {
        try {
            const parametro = await parametroServices.getAll();
            res.status(200).json({
                parametro,
                msg: parametro.length > 0 ?
                    'parametro fue encontrado' :
                    'no se encontro ningun parametro'
            });
        } catch (error) {
            next(error);
        }
    });

    router.post("/createParametro", async function (req, res, next) {
        const { body: data } = req;
        try {
            const parametro = await parametroServices.create(data);
            res.status(200).json({
                parametro,
                msg: parametro ?
                    'parametro fue encontrado' :
                    'no se encontro ningun parametro'
            });
        } catch (error) {
            next(error);
        }
    });  

    router.put("/update/:idParametro", async function (req, res, next) {
        const { body: data } = req;
        const { idParametro } = req.params;
        try {
            const parametro = await parametroServices.update(data, idParametro);
            res.status(200).json({
                parametro,
                msg: parametro ?
                    'parametro fue encontrado' :
                    'no se encontro ningun parametro'
            });
        } catch (error) {
            next(error);
        }
    });
    router.post("/deleteParametro", async function (req, res, next) {
        const { body: data } = req;
        try {
            const parametro = await parametroServices.deleteParametro(data);
            res.status(200).json({
                parametro,
                msg: parametro ?
                    'parametro encontrado' :
                    'no se encontro ningun parametro'
            });
        } catch (error) {
            next(error);
        }
    });
}
module.exports = parametroApi;
const express = require("express");
const pokemonclienteServices = require("../services/pokemoncliente")
const pokemonclienteApi = (app) => {
const router = express.Router();
    app.use("/pokemoncliente", router)
//http://localhost:5000/pokemoncliente/
     router.get("/:idpokemoncliente", async function (req, res, next) {
        const { idpokemoncliente } = req.params;
        try {
            const pokemoncliente = await pokemonclienteServices.getOne(idpokemoncliente);
            res.status(200).json({
                pokemoncliente,
                msg: pokemoncliente ?
                    'el cliente de pokemon fue encontrado' :
                    'no se encontro ningun cliente de pokemon'
            });
        } catch (error) {
            next(error);
        }
    });


    router.get("/", async function (res, next) {
        try {
            const pokemoncliente = await pokemonclienteServices.getAll();
            res.status(200).json({
                pokemoncliente,
                msg: pokemoncliente.length > 0 ?
                    'el cliente de pokemon fue encontrado' :
                    'no se encontro ningun cliente de pokemon'
            });
        } catch (error) {
            next(error);
        }
    });

 router.post("/createPokemoncliente", async function (req, res, next) {
        const { body: data } = req;
        try {
            const pokemoncliente = await pokemonclienteServices.pokemoncliente(data);
            res.status(200).json({
                pokemoncliente,
                msg: pokemoncliente ?
                    'el cliente de pokemon fue encontrado' :
                    'no se encontro ningun cliente de pokemon'
            });
        } catch (error) {
            next(error);
        }
    });

    router.put("/update/:idPokemoncliente", async function (req, res, next) {
        const { body: data } = req;
        const { idPokemoncliente } = req.params;
        try {
            const pokemoncliente = await pokemonclienteServices.update(data, idPokemoncliente);
            res.status(200).json({
                pokemoncliente,
                msg: pokemoncliente ?
                    'el cliente de pokemon fue encontrado' :
                    'no se encontro ningun cliente de pokemon'
            });
        } catch (error) {
            next(error);
        }
    });
    router.post("/deletePokemoncliente", async function (req, res, next) {
        const { body: data } = req;
        try {
            const pokemoncliente = await pokemonclienteServices.pokemonclienteParametro(data);
            res.status(200).json({
                pokemoncliente,
                msg: pokemoncliente
                ?
                    'el cliente de pokemon encontrado' :
                    'no se encontro ningun cliente de pokemon'
            });
        } catch (error) {
            next(error);
        }
    });
}
module.exports = pokemonclienteApi;
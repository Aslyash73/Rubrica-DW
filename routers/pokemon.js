const express = require("express");
const PokemonServices = require("../services/pokemon")
const pokemonApi = (app) => {
    const pokemonServices = new PokemonServices();
    const router = express.Router();
    app.use("/pokemon", router)
    //http://localhost:5000/pokemon/
    router.get("/:idPokemon", async function (req, res, next) {
        const { idPokemon } = req.params;
        try {
            const pokemon = await pokemonServices.getOne(idPokemon);
            res.status(200).json({
                pokemon,
                msg: pokemon ?
                    'pokemon fue encontrado' :
                    'no se encontro ningun pokemon'
            });
        } catch (error) {
            next(error);
        }
    });


    router.get("/", async function (res, next) {
        try {
            const pokemon = await pokemonServices.getAll();
            res.status(200).json({
                pokemon,
                msg: pokemon.length > 0 ?
                    'pokemon fue encontrado' :
                    'no se encontro ningun pokemon'
            });
        } catch (error) {
            next(error);
        }
    });

    router.post("/createPokemon", async function (req, res, next) {
        const { body: data } = req;
        try {
            const pokemon = await pokemonServices.Pokemon(data);
            res.status(200).json({
                pokemon,
                msg: pokemon ?
                    'pokemon fue encontrado' :
                    'no se encontro ningun okemon'
            });
        } catch (error) {
            next(error);
        }
    });

    router.put("/update/:idPokemon", async function (req, res, next) {
        const { body: data } = req;
        const { idPokemon } = req.params;
        try {
            const pokemon = await pokemonServices.update(data, idPokemon);
            res.status(200).json({
                pokemon,
                msg: pokemon ?
                    'pokemon fue encontrado' :
                    'no se encontro ningun pokemon'
            });
        } catch (error) {
            next(error);
        }
    });
    router.post("/deletePokemon", async function (req, res, next) {
        const { body: data } = req;
        try {
            const pokemon = await pokemonServices.deletepokemon(data);
            res.status(200).json({
                pokemon,
                msg: pokemon ?
                    'pokemon encontrado' :
                    'no se encontro ningun pokemon'
            });
        } catch (error) {
            next(error);
        }
    });
}
module.exports = pokemonApi;
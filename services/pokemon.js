const { Pokemon: PokemonModel, sequelize, } = require("../models");

class PokemonService {
  async getOne(id) {
    const pokemon = await PokemonModel.findOne({
      where: { id, estado: 1 },
    });
    return pokemon;
  }

  async getAll(where) {
    const pokemon = await PokemonModel.findAll({
      where: { ...where, estado: 1 },
    });
    return pokemon;
  }

  async create(data) {
    const t = await sequelize.transaction();
    try {
      const createdPokemon = await PokemonModel.create(data, { transaction: t });
      await t.commit();
      return createdPokemon;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't create",
      };
    }
  }

  async update(data, PokemonId) {
    const t = await sequelize.transaction();
    try {
      await PokemonModel.update(data, {
        where: { id: PokemonId },
        transaction: t,
      });
      await t.commit();
      const updatedPokemon = await PokemonModel.findByPk(PokemonId);
      return updatedPokemon;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't update",
      };
    }
  }

  async delete(PokemonId) {
    const t = await sequelize.transaction();
    const Pokemon = await this.getOne(PokemonId);
    if (!Pokemon) {
      return {
        status: 400,
        message: "User Not Found",
      };
    }
    try {
      await PokemonModel.update(
        { estado: -1 },
        {
          where: { id: PokemonId },
          transaction: t,
        }
      );
      await t.commit();
      return PokemonId;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't delete",
      };
    }
  }
}

module.exports = PokemonService;
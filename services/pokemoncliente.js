const { Pokemoncliente: PokemonclienteModel, sequelize, } = require("../models");

class PokemonclienteService {
  async getOne(id) {
    const pokemoncliente = await PokemonclienteModel.findOne({
      where: { id, estado: 1 },
    });
    return pokemoncliente;
  }

  async getAll(where) {
    const pokemoncliente = await PokemonclienteModel.findAll({
      where: { ...where, estado: 1 },
    });
    return pokemoncliente;
  }

  async create(data) {
    const t = await sequelize.transaction();
    try {
      const createdPokemoncliente = await PokemonclienteModel.create(data, { transaction: t });
      await t.commit();
      return createdPokemoncliente;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't create",
      };
    }
  }

  async update(data, PokemonclienteId) {
    const t = await sequelize.transaction();
    try {
      await PokemonclienteModel.update(data, {
        where: { id: PokemonclienteId },
        transaction: t,
      });
      await t.commit();
      const updatedPokemoncliente = await PokemonclienteModel.findByPk(PokemonclienteId);
      return updatedPokemoncliente;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't update",
      };
    }
  }

  async delete(PokemonclienteId) {
    const t = await sequelize.transaction();
    const pokemoncliente = await this.getOne(PokemonclienteId);
    if (!pokemoncliente) {
      return {
        status: 400,
        message: "User Not Found",
      };
    }
    try {
      await PokemonclienteModel.update(
        { estado: -1 },
        {
          where: { id: PokemonclienteId },
          transaction: t,
        }
      );
      await t.commit();
      return PokemonclienteId;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't delete",
      };
    }
  }
}

module.exports = PokemonclienteService;
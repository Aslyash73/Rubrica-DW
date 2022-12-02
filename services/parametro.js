const { Parametro: ParametroModel, sequelize, } = require("../models/");

class parametroService {
  async getOne(id) {
    const parametro = await ParametroModel.findOne({
      where: { id, state: 1 },
    });
    return parametro;
  }

  async getAll(where) {
    const parametro = await ParametroModel.findAll({
      where: { ...where, state: 1 },
    });
    return parametro;
  }

  async create(data) {
    const t = await sequelize.transaction();
    try {
      const createdparametro = await ParametroModel.create(data, { transaction: t });
      await t.commit();
      return createdparametro;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't create",
      };
    }
  }

  async update(data, parametroId) {
    const t = await sequelize.transaction();
    try {
      await ParametroModel.update(data, {
        where: { id: parametroId },
        transaction: t,
      });
      await t.commit();
      const updatedparametro = await ParametroModel.findByPk(clientId);
      return updatedparametro;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't update",
      };
    }
  }

  async delete(parametroId) {
    const t = await sequelize.transaction();
    const parametro = await this.getOne(parametroId);
    if (!parametro) {
      return {
        status: 400,
        message: "User Not Found",
      };
    }
    try {
      await ParametroModel.update(
        { state: -1 },
        {
          where: { id: parametroId },
          transaction: t,
        }
      );
      await t.commit();
      return parametroId;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't delete",
      };
    }
  }
}

module.exports = parametroService;
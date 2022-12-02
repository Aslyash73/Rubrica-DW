const { Autos: AutosModel, sequelize, } = require("../models/");

class AutosService {
  async getOne(id) {
    const autos = await AutosModel.findOne({
      where: { id, state: 1 },
    });
    return autos;
  }

  async getAll(where) {
    const autos = await AutosModel.findAll({
      where: { ...where, state: 1 },
    });
    return autos;
  }

  async create(data) {
    const t = await sequelize.transaction();
    try {
      const createdAutos = await AutosModel.create(data, { transaction: t });
      await t.commit();
      return createdAutos;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't create",
      };
    }
  }

  async update(data, AutosId) {
    const t = await sequelize.transaction();
    try {
      await AutosModel.update(data, {
        where: { id: AutosId },
        transaction: t,
      });
      await t.commit();
      const updatedAutos = await AutosModel.findByPk(AutosId);
      return updatedAutos;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't update",
      };
    }
  }

  async delete(AutosId) {
    const t = await sequelize.transaction();
    const Autos = await this.getOne(AutosId);
    if (!Autos) {
      return {
        status: 400,
        message: "User Not Found",
      };
    }
    try {
      await AutosModel.update(
        { state: -1 },
        {
          where: { id: AutosId },
          transaction: t,
        }
      );
      await t.commit();
      return AutosId;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't delete",
      };
    }
  }
}

module.exports = AutosService;
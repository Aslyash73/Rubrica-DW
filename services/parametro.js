const {
  Parametro: ParametroModel,
  sequelize
} = require("../models/");

class parametroService {
  async getOne(id) {
    const parametro = await ParametroModel.findOne({
      where: { id, estado: 1 },
    });
    return parametro;
  }

  async getAll() {
    try {
      const parametro = await ParametroModel.findAll({
        where: { estado: 1 },
      });
      return parametro;
    } catch (error) {
      return error;
    }
  }

  async create(data) {
    const t = await sequelize.transaction();
    try {
      const createdparametro = await ParametroModel.create({
        ...data
      },
        {
          transaction: t
        });
      await t.commit();
      return createdparametro;
    } catch (e) {
      await t.rollback();
      console.log(e)
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
        { estado: -1 },
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
const { Ventas: VentasModel, sequelize, } = require("../models/");

class VentasService {
  async getOne(id) {
    const venta = await VentasModel.findOne({
      where: { id, state: 1 },
    });
    return venta;
  }

  async getAll(where) {
    const venta = await VentastModel.findAll({
      where: { ...where, state: 1 },
    });
    return venta;
  }

  async create(data) {
    const t = await sequelize.transaction();
    try {
      const createdVentas = await VentasModel.create(data, { transaction: t });
      await t.commit();
      return createdVentas;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't create",
      };
    }
  }

  async update(data, VentasId) {
    const t = await sequelize.transaction();
    try {
      await clientModel.update(data, {
        where: { id: VentasId },
        transaction: t,
      });
      await t.commit();
      const updatedVentas = await clientModel.findByPk(VentasId);
      return updatedVentas;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't update",
      };
    }
  }

  async delete(VentasId) {
    const t = await sequelize.transaction();
    const Ventas = await this.getOne(VentasId);
    if (!ventas) {
      return {
        status: 400,
        message: "User Not Found",
      };
    }
    try {
      await VentasModel.update(
        { state: -1 },
        {
          where: { id: VentasId },
          transaction: t,
        }
      );
      await t.commit();
      return VentasId;
    } catch (e) {
      await t.rollback();
      return {
        status: 400,
        message: "Couldn't delete",
      };
    }
  }
}

module.exports = VentasService;
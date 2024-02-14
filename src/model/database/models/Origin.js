module.exports = (sequelize, DataTypes) => {
  let alias = "Origin";

  let columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    tableName: "origins",
    timestamps: false,
  };

  let Origin = sequelize.define(alias, columns, config);
  Origin.associate = function (models) {
    Origin.hasMany(models.Product, {
      as: "origin",
      foreignKey: "origen_id",
    });
  };
  return Origin;
};
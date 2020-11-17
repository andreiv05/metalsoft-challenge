module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('invoice', {
    sum: {
      type: DataTypes.FLOAT,
    }
  });

  return Invoice;
}
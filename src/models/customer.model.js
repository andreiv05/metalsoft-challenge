module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    name: {
      type: DataTypes.STRING,
    }
  });

  return Customer;
}
module.exports = function(sequelize, DataTypes) {
    var Books = sequelize.define("Books", {
      title: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    });
    return Books;
  };
  
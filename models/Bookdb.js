module.exports = function(sequelize, DataTypes) {
    var Books = sequelize.define("Books", {
      title:{
        type:DataTypes.STRING,

        allowNull:false,

        validate:{
          len:[1]
        }
      } ,
      devoured: {
       type: DataTypes.BOOLEAN,

       defaultValue:false
      }
      
      });
    return Books;
  };
  
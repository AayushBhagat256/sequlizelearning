
module.exports = (sequelize,DataTypes, Model) =>{
  const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
    tableName:'users',
    timestamps:false,
  });
  
  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.User); // true

  return User
  
}



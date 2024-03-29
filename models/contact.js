

module.exports = (sequelize,DataTypes) =>{
  const Contact = sequelize.define('Contacts', {
    // Model attributes are defined here
    permanent_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    current_address: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });
}


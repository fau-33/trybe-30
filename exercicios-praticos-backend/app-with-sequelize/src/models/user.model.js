/* 'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associações aqui, se necessário
    }
  };

  User.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING, // Adicione os campos adicionais, como o campo de email
  }, {
    sequelize,
    modelName: 'User', // Defina o nome do modelo aqui, que será usado nas consultas
  });

  return User;
};
 */

  const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });
(async () => {
  await sequelize.sync({ force: true });
  // As funções vão aqui
})();
  return User;
};

/* const sara = await User.create({
  fullName: 'Sara Silva Santos',
  email: 'sara.ss@trybe.com',
});

console.log(sara instanceof User); // true
console.log(sara.name); // "Sara Silva Santos" */


 module.exports = UserModel;
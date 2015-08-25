module.exports = function(sequelize, Sequelize) {
  return sequelize.define("student", {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
  });
}

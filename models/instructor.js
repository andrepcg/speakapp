module.exports = function(sequelize, Sequelize) {
  return sequelize.define("instructor", {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    name: Sequelize.STRING,
    photo_url: Sequelize.STRING
  });
}

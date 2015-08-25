module.exports = function(sequelize, Sequelize) {
  return sequelize.define("comment", {
    request_type: Sequelize.STRING,
    content: Sequelize.STRING
  });
}

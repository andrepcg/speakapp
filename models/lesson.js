module.exports = function(sequelize, Sequelize) {
  return sequelize.define("lesson", {
    topic: Sequelize.STRING,
    date: Sequelize.DATE,
    time: Sequelize.STRING
  });
}

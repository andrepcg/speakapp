module.exports = function(sequelize, Sequelize) {
  return sequelize.define("lesson", {
    instructor_id: Sequelize.INTEGER,
    topic: Sequelize.STRING,
    date: Sequelize.DATE,
    time: Sequelize.STRING
  });
}

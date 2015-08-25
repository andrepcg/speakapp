module.exports = function(sequelize, Sequelize) {
  return sequelize.define("comment", {
    student_id: Sequelize.INTEGER,
    class_id: Sequelize.INTEGER,
    request_type: Sequelize.STRING,
    content: Sequelize.STRING
  });
}

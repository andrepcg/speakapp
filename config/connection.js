var Sequelize = require("sequelize");

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  });
} else {
  // the application is executed on the local machine
  sequelize = new Sequelize("postgres:///speakapp_db");
}


var sequelize = new Sequelize("postgres:///speakapp_db");

var Comment = sequelize.import("../models/comment");
var Instructor = sequelize.import("../models/instructor");
var Lesson = sequelize.import("../models/lesson");
// var Student = sequelize.import("../models/student");

Comment.belongsTo(Lesson);
// Comment.belongsTo(Student);
Comment.belongsTo(Instructor, {through: Lesson});
Instructor.hasMany(Lesson);
Lesson.hasMany(Comment);
// Student.hasMany(Comment);
// Student.belongsToMany(Lesson, {through: Comment});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
  Comment: Comment,
  Instructor: Instructor,
  Lesson: Lesson,
  // Student: Student
  }
};

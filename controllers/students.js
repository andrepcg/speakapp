var express = require("express");
var router = express.Router();
var DB = require("../config/connection");
var Student = DB.models.Student;

// Index
router.get("/students", function(req, res) {
  Student.findAll().then(function(students){
    res.json(students);
  });
});

// Create
router.post("/students", function(req, res) {
  Student.create(req.body).then(function (student) {
    res.json(student);
  });
});

// Show
router.get("/students/:id", function(req, res) {
  Student.findById(req.params.id)
  .then(function(student){
    if(!student) return error(res, "not found");
    return student.updateAttributes(req.body);
  })
  .then(function(student){
    res.json(student);
  });
});

//Update
router.put("/students/:id", function(req, res){
  Student.findById(req.params.id)
  .then(function(student){
    if(!student) return error(res, "not found");
    return student.updateAttributes(req.body);
  })
  .then(function(student){
    res.json(student);
  });
});

//Destroy
router.delete("/students/:id", function(req, res){
  Student.findById(req.params.id)
  .then(function(student){
    if(!student) return error(res, "not found");
    return student.destroy()
  })
  .then(function(student){
    res.json(student)
  });
});

module.exports = router;

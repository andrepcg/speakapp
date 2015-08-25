var express = require("express");
var router = express.Router();
var DB = require("../config/connection");
var Instructor = DB.models.Instructor;

function error(response, message){
  response.status(500);
  response.json({error: message})
};

// Index
router.get("/instructors", function(req, res) {
  Instructor.findAll().then(function(instructors){
    res.json(instructors);
  });
});

// Create
router.post("/instructors", function(req, res) {
  Instructor.create(req.body).then(function (instructor) {
    res.json(instructor);
  });
});

// Show
router.get("/instructors/:id", function(req, res) {
  Instructor.findById(req.params.id)
  .then(function(instructor){
    if(!instructor) return error(res, "not found");
    return instructor.updateAttributes(req.body);
  })
  .then(function(instructor){
    res.json(instructor);
  });
});

//Update
router.put("/instructors/:id", function(req, res){
  Instructor.findById(req.params.id)
  .then(function(instructor){
    if(!instructor) return error(res, "not found");
    return instructor.updateAttributes(req.body);
  })
  .then(function(instructor){
    res.json(instructor);
  });
});

//Destroy
router.delete("/instructors/:id", function(req, res){
  Instructor.findById(req.params.id)
  .then(function(instructor){
    if(!instructor) return error(res, "not found");
    return instructor.destroy()
  })
  .then(function(instructor){
    res.json(instructor)
  });
});


module.exports = router;

var express = require("express");
var router = express.Router();
var DB = require("../config/connection");
var Comment = DB.models.Comment;

// Index
router.get("/comments", function(req, res) {
  Comment.findAll().then(function(comments){
    res.json(comments);
  });
});

// Create
router.post("/comments", function(req, res) {
  Comment.create(req.body).then(function (comment) {
    res.json(comment);
  });
});

// Show
router.get("/comments/:id", function(req, res) {
  Comment.findById(req.params.id)
  .then(function(comment){
    if(!comment) return error(res, "not found");
    return comment.updateAttributes(req.body);
  })
  .then(function(comment){
    res.json(comment);
  });
});

//Update
router.put("/comments/:id", function(req, res){
  Comment.findById(req.params.id)
  .then(function(comment){
    if(!comment) return error(res, "not found");
    return comment.updateAttributes(req.body);
  })
  .then(function(comment){
    res.json(comment);
  });
});

//Destroy
router.delete("/comments/:id", function(req, res){
  Comment.findById(req.params.id)
  .then(function(comment){
    if(!comment) return error(res, "not found");
    return comment.destroy()
  })
  .then(function(comment){
    res.json(comment)
  });
});

module.exports = router;

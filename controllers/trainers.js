const express = require('express');
const trainerRouter = new express.Router();

let trainers = [{Trainer: "Ash", Age: 46}, {Trainer: "Misty", Age: 20}];


trainerRouter.get('/', function(req, res){
  res.json(trainers)
})


trainerRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json({data: trainers[index]});
})


trainerRouter.post('/', function(req, res){
  trainer.push(req.body.trainer);
  res.json(trainers);
})


trainerRouter.put('/:id', function(req, res){
  let index = req.params.id;
  trainers[index] = req.body.trainer;
  res.json({data: trainers});
})


trainerRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  trainers.splice(index, 1);
  res.json(trainers);
})

module.exports = trainerRouter;

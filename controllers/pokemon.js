const express = require('express');
const pokemonRouter = new express.Router();

let pokemon = ["Pikachu", "Charmander", "Squirtle", "Bulbasaur", "Growlithe", "Snorlax"];


pokemonRouter.get('/', function(req, res){
  res.json(pokemon)
})


pokemonRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json({data: pokemon[index]});
})


pokemonRouter.post('/', function(req, res){
  pokemon.push(req.body.pokemon);
  res.json(pokemon);
})


pokemonRouter.put('/:id', function(req, res){
  let index = req.params.id;
  pokemon[index] = req.body.pokemon;
  res.json({data: pokemon});
})


pokemonRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  pokemon.splice(index, 1);
  res.json(pokemon);
})

module.exports = pokemonRouter;

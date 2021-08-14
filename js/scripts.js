let pokemonRepository = (function (){
let pokemonList = [
{name: 'Pikachu', height: .4, types: ['electric']},
{name: 'Arceus', height: 3.2, types: ['normal']},
{name: 'Blaziken', height: 1.9, types: ['fire', 'fighting']}
];

function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

return {
	add: add,
	getAll: getAll
	
};

function addListItem(pokemon)
})();

pokemonRepository.getAll().forEach(function (item) {
});
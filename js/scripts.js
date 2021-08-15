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
})();

pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);
	let pokemonList = document.querySelector('.pokemon-list');
	let listpokemon = document.createElement('li');
	let button = document.createElement('button');
	button.innerText = pokemon.name;
	button.classList.add('poke-name');
	listpokemon.appendChild(button);
	pokemonList.appendChild(listpokemon);
});
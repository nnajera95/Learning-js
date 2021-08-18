const pokemonRepository = (function (){
const pokemonList = [
{name: 'Pikachu', height: .4, types: ['electric']},
{name: 'Arceus', height: 3.2, types: ['normal']},
{name: 'Blaziken', height: 1.9, types: ['fire', 'fighting']}
];

function getAll() {
  return pokemonList;
}

function showDetails(pokemon) {
	console.log(pokemon);
}

function addListItem(pokemon) {
	let pokemonList = document.querySelector('.pokemon-list');
	let listpokemon = document.createElement('li');
	let button = document.createElement('button');
		button.addEventListener('click', function() {
			showDetails(pokemon)
			});
	button.innerText = pokemon.name;
	button.classList.add('poke-name');
	listpokemon.appendChild(button);
	pokemonList.appendChild(listpokemon);
}

return {
	getAll: getAll,
	addListItem: addListItem
};
})();

pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);
});
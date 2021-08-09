let pokemonRepository = (function () {
let pokemonList = [
{name: 'Pikachu', height: .4, types: ['electric']},
{name: 'Arceus', height: 3.2, types: ['normal']},
{name: 'Blaziken', height: 1.9, types: ['fire', 'fighting']}
];

return {
	add: function(pokemon) {
		pokemonList.push(pokemon);
	},
	getAll: function() {
		return pokemonList;
	}
};
})();

function myLoopFunction(pokemon) {
	document.write(pokemon.name + ' height:' + pokemon.height + 'm' + '<br/>');
}
pokemonList.forEach(myLoopFunction);


let pokemonList = [
{name: 'Blaziken', height: 1.9, types: ['fire', 'fighting']},
{name: 'Pikachu', height: .4, types: ['electric']},
{name: 'Arceus', height: 3.2, types: ['normal']}
];

function myLoopFunction(pokemon) {
	document.write(pokemon.name + ' height:' + pokemon.height + 'm' + '<br/>');
}
pokemonList.forEach(myLoopFunction);
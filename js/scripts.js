let pokemonList = [
{name: 'Pikachu', height: .4, types: ['electric']},
{name: 'Arceus', height: 3.2, types: ['normal']},
{name: 'Blaziken', height: 1.9, types: ['fire', 'fighting']}
];


for (let i = 0; i < pokemonList.length; i++){
	if (pokemonList[i].height <1 && pokemonList[i].height >.5){
		document.write(pokemonList[i].name + pokemonList[i].height);
	} else if (pokemonList[i].height > 3){
		document.write(pokemonList[i].name + pokemonList[i].height);
	} else {
		document.write(pokemonList[i].name + pokemonList[i].height);
	}
}
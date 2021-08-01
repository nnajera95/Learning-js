let pokemonList = [
{name: 'Blaziken', height: 1.9, types: ['fire', 'fighting']},
{name: 'Pikachu', height: .4, types: ['electric']},
{name: 'Arceus', height: 3.2, types: ['normal']}
];


for (let i = 0; i < pokemonList.length; i++){
	if (pokemonList[i].height <2 && pokemonList[i].height >1){
		document.write(pokemonList[i].name + ' height:1.9m ');
	} else if (pokemonList[i].height > 1){
		document.write(pokemonList[i].name + ' height:.4m ');
	} else {
		document.write(pokemonList[i].name + ' height:3.2m ');
	}
}
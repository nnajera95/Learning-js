let pokemonList = [
{name: 'Blaziken', height: 1.9, types: ['fire', 'fighting']},
{name: 'Pikachu', height: .4, types: ['electric']},
{name: 'Arceus', height: 3.2, types: ['normal']}
];


for (let i = 0; i < pokemonList.length; i++){
	if (pokemonList[i].height >3){
		document.write(pokemonList[i].name + ' height:' + pokemonList[i].height + 'm - Wow, that is big!' + '<br/>');
	} else if (pokemonList[i].height <2){
		document.write(pokemonList[i].name + ' height:' + pokemonList[i].height + 'm ' + '<br/>');
	}
}

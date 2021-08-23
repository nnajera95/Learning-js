const pokemonRepository = (function (){
const pokemonList = [
{name: 'Pikachu', height: .4, types: ['electric']},
{name: 'Arceus', height: 3.2, types: ['normal']},
{name: 'Blaziken', height: 1.9, types: ['fire', 'fighting']}
];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function getAll() {
  return pokemonList;
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
	   console.log(pokemon);
   });
}

function addListItem(pokemon) {
	let pokemonList = document.querySelector('.pokemon-list');
	let listPokemon = document.createElement('li');
	let button = document.createElement('button');
		button.addEventListener('click', function() {
			showDetails(pokemon)
			});
	button.innerText = pokemon.name;
	button.classList.add('poke-name');
	listPokemon.appendChild(button);
	pokemonList.appendChild(listPokemon);
}

function loadList() {
  return fetch(apiUrl).then(function (item) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

return {
	getAll: getAll,
	addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails
};
})();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);
  });
});

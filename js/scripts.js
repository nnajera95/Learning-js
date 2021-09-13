const pokemonRepository = (function () {
  const pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

function getAll() {
  return pokemonList;
}

function addListItem(pokemon) {
	let pokemonList = document.querySelector('.pokemon-list');
	let listPokemon = document.createElement('li');
    listPokemon.classList.add('group-list-item');
	let button = document.createElement('button');
		button.addEventListener('click', function() {
			showDetails(pokemon)
			});
	button.innerText = pokemon.name;
	button.classList.add('poke-name', 'btn-primary');
  button.setAttribute('data-toggle', 'modal')
  button.setAttribute('data-target', '#pokemon-modal')

	listPokemon.appendChild(button);
	pokemonList.appendChild(listPokemon);
}

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
      console.log(pokemon);
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
    item.imageUrlFront = details.sprites.front_default;
    item.imageUrlBack = details.sprites.back_default;
    item.height = details.height;
    item.weight = details.weight;
    item.types = details.types;
    item.abilities = details.abilities;
  }).catch(function (e) {
    console.error(e);
  });
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
	   showModal(pokemon)
   });
}

function showModal(item) {
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  let modalHeader = $('.modal-header');

  modalTitle.empty();
  modalBody.empty();

  let nameElement = $('<h1>' + item.name + '</h1>');
  let imageElementFront = $('<img class="modal-img" style="width:50%">');
  imageElementFront.attr('src', item.imageUrlFront);

  let imageElementBack = $('<img class="modal-img" style="width:50%">');
  imageElementBack.attr('src', item.imageUrlBack);

  let heightElement = $('<p>' + 'height : ' + item.height + '</p>');
  let weightElement = $('<p>' + 'weight : ' + item.weight + '</p>');
  let typesElement = $('<p>' + 'types : ' + item.types + '</p>');
  let abilitiesElement = $('<p>' + 'abilities : ' + item.abilities + '</p>');

  modalTitle.append(nameElement);
  modalBody.append(imageElementFront);
  modalBody.append(imageElementBack);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
  modalBody.append(typesElement);
  modalBody.append(abilitiesElement);
}
return {
  getAll: getAll,
	addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
};
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
	   pokemonRepository.addListItem(pokemon);
  });
});

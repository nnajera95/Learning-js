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
	let button = document.createElement('button');
		button.addEventListener('click', function() {
			showDetails(pokemon)
			});
	button.innerText = pokemon.name;
	button.classList.add('poke-name', 'btn-primary');
  button.setAttribute('data-toggle', 'modal')
  button.setAttribute('data-target', 'modal')

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
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
	   showModal(pokemon)
   });
}

<<<<<<< HEAD
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
  let weightElement = $('<p>' + 'height : ' + item.weight + '</p>');
  let typesElement = $('<p>' + 'types : ' + item.types + '</p>');
  let abilitiesElement = $('<p>' + 'abilities : ' + item.abilities + '</p>');

  modalTitle.append(nameElement);
  modalBody.append(imageElementFront);
  modalBody.append(imageElementBack);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
  modalBody.append(typesElement);
  modalBody.append(abilitiesElement);
=======
function showModal(pokemon) {
  modalContainer.innerHTML = ' ';
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'close';
  closeButtonElement.addEventListener('click', hideModal);

  let titleElement = document.createElement('h2')
  titleElement.innerText = pokemon.name;

  let contentElement = document.createElement('p');
  contentElement.innerText = pokemon.height + ' meters';


  let myImage = document.createElement('img');
  myImage.src = pokemon.imageUrl;


  modal.appendChild(myImage);

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');
}

function hideModal() {
  modalContainer.classList.remove('is-visible');
>>>>>>> parent of ae134bd (added class for li)
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

const pokemonRepository = (function () {
  const pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
let modalContainer = document.querySelector('#modal-container');

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
	button.classList.add('poke-name');
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
}

//function showDialog(title, text) {
//  showModal(title, text);

//  let modal = modalContainer.querySelector('.modal');

//  let confirmButton = document.createElement('button');
//  confirmButton.classList.add('modal-confirm');
//  confirmButton.innerText = 'confirm';

//  let cancelButton = document.createElement('button');
//  cancelButton.classList.add('modal-cancel');
//  cancelButton.innerText = 'cancel';

//  modal.appendChild(confirmButton);
//  modal.appendChild(cancelButton);

//  confirmButton.focus();
//}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});


//document.querySelector('#show-dialog').addEventListener('click', () => {
  //showDialog('confirm action', 'Are you sure you want to do this?');
//});

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

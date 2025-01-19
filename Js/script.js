const pokemonId = document.querySelector('.pokemon_number');
const pokemonName = document.querySelector('.pokemon_name');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const fetchPokemon = async (Pokemon) => {

    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon.toLowerCase()}`);
    if (ApiResponse.status == 200) {
        const data = await ApiResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonId.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
    } else {
        pokemonName.innerHTML = 'Não encontrado!'
        pokemonId.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value);
});
const pokemonId = document.querySelector('.pokemon_number');
const pokemonName = document.querySelector('.pokemon_name');
const pokemonImage = document.querySelector('.pokemon_image');

const fetchPokemon = async (Pokemon) => {

    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`);
    const data = await ApiResponse.json();
    return data;


}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonId.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

renderPokemon('25');
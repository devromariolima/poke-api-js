const pokemonName = document.querySelector('.pokemon_name');

const fetchPokemon = async (Pokemon) => {

    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`);
    const data = await ApiResponse.json();
    return data;


}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
}

renderPokemon('25');
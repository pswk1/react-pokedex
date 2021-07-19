import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [pokeData, setPokeData] = useState([]);
	const getPokemon = async () => {
		const original = 151;
		let pokemons = [];

		for (let id = 1; id <= original; id++) {
			let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
			let pokemon = response.data;

			const pokemonType = pokemon.types
				.map((poke) => poke.type.name)
				.join(', ');
			const pokemonAbilities = pokemon.abilities
				.map((poke) => poke.ability.name)
				.join(', ');

			const transformedPokemon = {
				id: pokemon.id,
				name: pokemon.name,
				image: `${pokemon.sprites.front_default}`,
				type: pokemonType,
				abilities: pokemonAbilities,
			};

			pokemons.push(transformedPokemon);
		}
		setPokeData(pokemons);
	};

	useEffect(() => {
		getPokemon();
	}, []);

	if (pokeData.length) {
		console.log(pokeData);
	}

	return <div className='App'>hello world</div>;
}

export default App;

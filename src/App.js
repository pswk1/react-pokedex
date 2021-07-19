import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import { Typography } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	spacing:  8,
	typography: {
		h1: {
			fontFamily: 'Montserrat',
			color: 'white',
			fontSize: '3rem',
			letterSpacing: '0.7rem',
			textTransform: 'uppercase',
			padding: '0.5rem',
		},
	},
});

function App() {
	const [pokeData, setPokeData] = useState([]);
	const getPokemon = async () => {
		const original = 5;
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

	return (
		<MuiThemeProvider theme={theme}>
			<Typography align='center' variant='h1'>
				Pokédex
			</Typography>
			<Container pokeData={pokeData} />
		</MuiThemeProvider>
	);
}

export default App;

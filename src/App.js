import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import { Grid, Typography } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const theme = createTheme({
	palette: {
		primary: { main: '#6082B6' },
	},
	spacing: 8,
	typography: {
		fontFamily: 'Montserrat',
		h1: {
			// fontFamily: 'Montserrat',
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
		const original = 151;
		let pokemons = [];

		for (let id = 1; id <= original; id++) {
			let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
			let pokemon = response.data;
			// console.log(pokemon);

			const pokemonType = pokemon.types
				.map((poke) => poke.type.name)
				.join(', ');
			const pokemonAbilities = pokemon.abilities
				.map((poke) => poke.ability.name)
				.join(', ');
			const pokemonStats = pokemon.stats.map((data) => ({
				statName: data.stat.name,
				baseStat: data.base_stat,
			}));

			const transformedPokemon = {
				id: pokemon.id,
				name: pokemon.name,
				image: `${pokemon.sprites.front_default}`,
				type: pokemonType,
				abilities: pokemonAbilities,
				stats: pokemonStats,
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
			<Grid
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
			>
				{pokeData.length < 151 ? (
					<Grid item>
						<CircularProgress
							size='10rem'
							style={{ marginTop: '4rem', color: 'white' }}
						/>
					</Grid>
				) : (
					<Container pokeData={pokeData} />
				)}
			</Grid>
		</MuiThemeProvider>
	);
}

export default App;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import { Grid, Typography } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Details from './components/Details';
import { theme } from './theme/muiTheme';

function App() {
	const [pokeData, setPokeData] = useState([]);
	const getPokemon = async () => {
		const original = 151;
		let promises = [];
		for (let id = 1; id <= original; id++) {
			promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
		}
		const results = await Promise.allSettled(promises);
		let pokemons = [];

		for (const result of results) {
			if (result.status === 'fulfilled') {
				const pokemon = result.value.data;
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
				const moves = pokemon.moves.slice(0, 5);

				const spriteData = Object.entries(pokemon.sprites);
				// filter out any alternate sprites that are not available. 
				// future: refactor this to have a fallback sprite instead
				// case: if sprite is null, use a locally saved sprite image to render instead
				const validSprites = spriteData.filter(([key, value]) => value !== null);
				const sprites = Object.fromEntries(validSprites);

				const transformedPokemon = {
					id: pokemon.id,
					name: pokemon.name,
					image: `${pokemon.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default}`,
					type: pokemonType,
					abilities: pokemonAbilities,
					stats: pokemonStats,
					moves,
					sprites,
					items: pokemon.held_items,
					height: pokemon.height,
					weight: pokemon.weight,
				};

				pokemons.push(transformedPokemon);
			} else {
				console.log(result.reason);
			}
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
			<Router>
				<Switch>
					<Route
						exact
						path='/details/:id'
						render={(props) => <Details {...props} />}
					/>

					<Route exact path='/'>
						<Grid
							container
							direction='column'
							justifyContent='center'
							alignItems='center'
						>
							{
							pokeData.length < 20 
							? (
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
					</Route>
				</Switch>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;

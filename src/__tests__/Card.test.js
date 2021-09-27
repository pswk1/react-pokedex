import React from 'react';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import 'regenerator-runtime/runtime';
import { StaticRouter } from 'react-router';

import Card from '../components/Card';

const pokemon = {
	id: 1,
	name: 'Bulbasaur',
	type: 'grass, poison',
	abilities: 'overgrow',
};

test('displays a default card image', async () => {
	const card = render(
		<StaticRouter>
			<Card pokemon={pokemon} />
		</StaticRouter>
	);

	const cardImg = await card.findByTestId('card-image');
	expect(cardImg.src).toContain('https://i.imgur.com/eber7r8.jpeg');
});

test('displays non-default correct card image', async () => {
	pokemon.image =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

	const card = render(
		<StaticRouter>
			<Card pokemon={pokemon} />
		</StaticRouter>
	);
	const cardImg = await card.findByTestId('card-image');
	expect(cardImg.src).toBe(pokemon.image);
});

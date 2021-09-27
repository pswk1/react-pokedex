import React from 'react';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import 'regenerator-runtime/runtime';
import { StaticRouter } from 'react-router';

import Card from '../components/Card';

test('displays a default card image', async () => {
	const pokemon = {
		id: 1,
		name: 'Bulbasaur',
		type: 'grass, poison',
		abilities: 'overgrow',
	};
	const card = render(
		<StaticRouter>
			<Card pokemon={pokemon} />
		</StaticRouter>
	);

	const cardImg = await card.findByTestId('card-image');
	expect(cardImg.src).toContain('https://i.imgur.com/eber7r8.jpeg');
});

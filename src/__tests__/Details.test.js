import React from 'react';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import 'regenerator-runtime/runtime';
import { StaticRouter } from 'react-router';

import Details from '../components/Details';

const location = {
	state: {
		pokemonData: {
			abilities: 'overgrow, chlorophyll',
			height: 7,
			id: 1,
            name: "bulbasaur",
            type: "grass, poison",
            weight: 69
		},
	},
};

describe('Details component', () => {
    test('Details component renders correct data', async () => {
        const view = render(
            <StaticRouter>
                <Details location={location} />
            </StaticRouter>
        
        )

        const name = view.getByText(/bulbasaur/i);
        expect(name).toBeInTheDocument();
    })
})
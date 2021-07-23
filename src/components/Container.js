import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from './Card';


const useStyles = makeStyles({
	container: {
		height: '100vh',
		width: '100vw',
		background: '#6082B6',
		padding: '0.5rem',
	},
});

const Container = ({ pokeData }) => {
	const classes = useStyles();
	return (
		<Grid
			className={classes.container}
			container
			direction='row'
			justifyContent='center'
			alignItems='center'
			data-cy='container'
		>
			{pokeData && pokeData.map((poke) => <Card pokemon={poke} />)}

		</Grid>
	);
};

Container.propTypes = {
	pokeData: PropTypes.array,
};

export default Container;

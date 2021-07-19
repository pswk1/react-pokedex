import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	container: {
		height: '100vh',
		width: '100vw',
		background: '#6082B6',
	},
	header: {
		fontSize: '3rem',
		letterSpacing: '0.7rem',
		textTransform: 'uppercase',
        padding: '0.5rem'
	},
});

const Container = ({ pokeData }) => {
	// console.log(pokeData);
	const classes = useStyles();
	return (
		<Grid className={classes.container} container>

		</Grid>
	);
};

Container.propTypes = {
	pokeData: PropTypes.array,
};

export default Container;

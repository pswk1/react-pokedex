import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
	card: {
		height: '40%',
		background: '#444',
		color: 'white',
		borderRadius: '10px',
		textAlign: 'center',
		boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
		position: 'relative',
		overflow: 'hidden',
		cursor: 'pointer',
		transition: ' 0.2s ease-in-out all',
		marginBottom: '0.5rem',
		'&:hover': {
			transform: 'scale(1.02)',
			borderRadius: '10px',
			border: '1px solid white',
		},
	},
	cardId: {
		background: 'black',
		width: '3rem',
		color: 'white',
		padding: '0.1rem',
		fontWeight: '700',
		position: 'absolute',
		borderRadius: '0 0 10px 0',
		top: '0',
		left: '0',
	},
	capitalize: {
		textTransform: 'capitalize',
	},
	cardImage: {
		width: '8rem',
		display: 'block',
		margin: 'auto',
	},
});

const Card = ({ pokemon }) => {
	console.log(pokemon);
	const { id, name, image, type, abilities } = pokemon;

	const classes = useStyles();
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.up('xs'));
	return (
		<Grid
			item
			container
			direction='column'
			justifyContent='center'
			alignItems='center'
			xs={12}
			sm={6}
			md={4}
			lg={3}
			xl={2}
			className={classes.card}
			style={{ marginLeft: mobile ? '0.5rem' : '0rem' }}
		>
			<Typography className={classes.cardId}>{id}</Typography>

			<Grid item>
				<Typography className={classes.capitalize} variant='h4'>
					{name}
				</Typography>
			</Grid>

			<Grid item>
				<img className={classes.cardImage} src={image} alt={name} />
			</Grid>
			<Grid item>
				<Typography gutterBottom className={classes.capitalize}>
					Type: {type}
				</Typography>
			</Grid>
			<Grid item>
				<Typography gutterBottom className={classes.capitalize}>
					Abiliites: {abilities}
				</Typography>
			</Grid>
		</Grid>
	);
};

Card.propTypes = {
	pokemon: PropTypes.object,
};

export default Card;

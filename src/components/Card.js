import React from 'react';
import {
	Grid,
	Typography,
	Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	card: {
		height: '50%',
		background: '#444',
		color: 'white',
		borderRadius: '10px',
		textAlign: 'center',
		boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
		position: 'relative',
		overflow: 'hidden',
		transition: ' 0.2s ease-in-out all',
		marginBottom: '0.5rem',
		'&:hover': {
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
		display: 'block',
		margin: 'auto',
	},
});

const defaultImg = 'https://i.imgur.com/eber7r8.jpeg';

const Card = ({ pokemon }) => {
	const { id, name, image, type, abilities } = pokemon;

	const classes = useStyles();
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down('xs'));

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
			style={{ marginLeft: mobile ? '0rem' : '0.5rem' }}
		>
			<Typography className={classes.cardId}>{id}</Typography>

			<Grid item>
				<Typography data-cy={ id === 1 && "name"} id={name} className={classes.capitalize} variant='h4'>
					{name}
				</Typography>
			</Grid>

			<Grid item>
				<img data-testid="card-image" style={{ width: !mobile && '8rem' }}className={classes.cardImage} src={image ? image : defaultImg} alt={name} />
			</Grid>
			<Grid item>
				<Typography data-cy={ id === 1 && "types"}gutterBottom={ mobile ? false : true} className={classes.capitalize}>
					Type: {type}
				</Typography>
			</Grid>
			<Grid item 
			style={{ marginBottom: '1rem'  }}
			>
				<Typography data-cy={ id === 1 && "abilities"}className={classes.capitalize}>
					Abiliites: {abilities}
				</Typography>
			</Grid>

			<Grid item>
				<Button
					aria-describedby={id}
					variant='contained'
					color='primary'
					data-cy={ id === 1 && "stats"}
					component={Link}
					to={{
						pathname: `/details/${id}`,
						state: {
							pokemonData: pokemon
						},
					}}
				>
					More Info
				</Button>
			</Grid>
		</Grid>
	);
};

Card.propTypes = {
	pokemon: PropTypes.object,
};

export default Card;

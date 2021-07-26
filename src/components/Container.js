import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
	container: {
		height: '100vh',
		width: '100vw',
		background: '#6082B6',
		padding: '0.5rem',
	},
	pagination: {
		'& .MuiPaginationItem-root': {
			color: 'white',
		},
	},
	paginationContainer: {
		marginBottom: '2rem',
	},
});

const Container = ({ pokeData }) => {
	const classes = useStyles();
	const pokemonPerPage = 20;
	const [page, setPage] = useState(1);
	const [numberOfPages] = useState(Math.ceil(pokeData.length / pokemonPerPage));

	const handlePageChange = (event, value) => {
		setPage(value);
	};

	return (
		<Grid
			className={classes.container}
			container
			direction='row'
			justifyContent='center'
			alignItems='center'
			data-cy='container'
		>
			<Grid
				className={classes.paginationContainer}
				item
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				xs={12}
			>
				<Grid item>
					<Pagination
						count={numberOfPages}
						page={page}
						onChange={handlePageChange}
						defaultPage={1}
						// color='primary'
						size='large'
						showFirstButton
						showLastButton
						classes={{ ul: classes.pagination }}
					/>
				</Grid>
			</Grid>
			{pokeData &&
				pokeData
					.slice((page - 1) * pokemonPerPage, page * pokemonPerPage)
					.map((poke) => <Card pokemon={poke} />)}
			{/* <span> */}
			{/* <Pagination
					count={numberOfPages}
					page={page}
					onChange={handlePageChange}
					defaultPage={1}
					// color='primary'
					// size='large'
					showFirstButton
					showLastButton
					// classes={{ ul: classes.paginator }}
				/> */}
			{/* </span> */}
		</Grid>
	);
};

Container.propTypes = {
	pokeData: PropTypes.array,
};

export default Container;

import PropTypes from 'prop-types';
import {
	Grid,
	Typography,
	Table,
	TableRow,
	TableCell,
} from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
	container: {
		padding: '1rem',
	},
	marginBottom: {
		marginBottom: '1rem',
	},
	cardImage: {
		display: 'block',
		margin: 'auto',
	},
	breadcrumb: {
		width: '5.0625rem',
		height: '1rem',
		color: 'white',
		textDecoration: 'none',
	},
	goBack: {
		marginBottom: '1rem',
		marginLeft: '0.5rem',
	},
	capitalize: {
		textTransform: 'capitalize',
	},
});

const Details = ({ location }) => {
	const {
		state: { pokemonData },
	} = location;
	const { abilities, height, image, name, sprites, stats, type, weight } =
		pokemonData;
	const pokemonHeight = height / 10;
	const pokemonWeight = weight / 10;
	const classes = useStyles();
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<Grid
			container
			direction='column'
			justifyContent='center'
			alignItems='flex-start'
			className={classes.container}
		>
			<Grid item xs={12} className={classes.goBack}>
				<Typography
					className={classes.breadcrumb}
					color='inherit'
					variant='button'
					component={Link}
					to='/'
				>
					{'< Go Back'}
				</Typography>
			</Grid>
			<Grid
				style={{ border: '1px solid white' }}
				item
				xs={12}
				container
				direction='row'
			>
				<Grid
					style={{
						borderRight: mobile ? 0 : '1px solid white',
					}}
					item
					xs={12}
					sm={4}
				>
					<img
						style={{ width: '10rem' }}
						className={classes.cardImage}
						src={image}
						alt={name}
					/>
				</Grid>
				<Grid item xs={12} sm={8}>
					<Typography variant='h2' align='left' className={classes.capitalize}>
						Name: {name}
					</Typography>
					<Typography
						variant='body1'
						align='left'
						className={classes.capitalize}
					>
						Height: {pokemonHeight} <span>m</span>
					</Typography>
					<Typography
						variant='body1'
						align='left'
						className={classes.capitalize}
					>
						Weight: {pokemonWeight} <span>kg</span>
					</Typography>
				</Grid>
			</Grid>
			<Grid
				style={{
					borderLeft: '1px solid white',
					borderBottom: '1px solid white',
					borderRight: mobile ? 0 : '1px solid white',
				}}
				item
				xs={12}
				container
				direction='row'
			>
				<Grid
					item
					container
					direction='column'
					style={{ borderRight: '1px solid white' }}
					xs={12}
					sm={4}
				>
					<Typography
						variant='body1'
						align='left'
						className={classes.capitalize}
					>
						Type: {type}
					</Typography>
					<Typography
						variant='body1'
						align='left'
						className={classes.capitalize}
					>
						Abilities: {abilities}
					</Typography>

					<Grid style={{ borderTop: '1px solid white' }} item container xs={12}>
						<Typography
							variant='body1'
							align='left'
							className={classes.capitalize}
						>
							Base Stats:
						</Typography>
						<Table>
							{stats.map((stat, i) => (
								<TableRow>
									<TableCell className={classes.capitalize}>
										<Typography variant='body2'>
											{i === 0 ? stat.statName.toUpperCase() : stat.statName}:
										</Typography>
									</TableCell>
									<TableCell>
										<Typography variant='body2'>{stat.baseStat}</Typography>
									</TableCell>
								</TableRow>
							))}
						</Table>
					</Grid>
				</Grid>

				<Grid style={{
							borderRight: mobile && '1px solid white'
						}} item container direction='column' xs={12} sm={8}>
					<Typography
						variant='body1'
						align='center'
						className={classes.capitalize}
					>
					    Alternate Sprites
					</Typography>

					<Grid
						style={{
							marginTop: mobile ? '0.5rem' : '3rem',
							marginBottom: mobile && '3rem',
						}}
						item
						container
						direction='row'
					>
						<Grid item xs={12} sm={6}>
							<img
								style={{ width: '8rem' }}
								className={classes.cardImage}
								src={sprites.front_default}
								alt='back front sprite'
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<img
								style={{ width: '8rem' }}
								className={classes.cardImage}
								src={sprites.front_shiny}
								alt='front shiny sprite'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<img
								style={{ width: '8rem' }}
								className={classes.cardImage}
								src={sprites.back_default}
								alt='back default sprite'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<img
								style={{ width: '8rem' }}
								className={classes.cardImage}
								src={sprites.versions['generation-viii'].icons.front_default}
								alt='back default sprite'
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

Details.propTypes = {
	location: PropTypes.object,
};

export default withRouter(Details);

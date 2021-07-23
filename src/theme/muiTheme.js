import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
	palette: {
		primary: { main: '#6082B6' },
	},
	spacing: 8,
	typography: {
		fontFamily: 'Montserrat',
		h1: {
			// fontFamily: 'Montserrat',
			color: 'white',
			fontSize: '3rem',
			letterSpacing: '0.7rem',
			textTransform: 'uppercase',
			padding: '0.5rem',
		},
		h2: {
			// fontFamily: 'Montserrat',
			color: 'white',
			fontSize: '2.5rem',
			padding: '0.5rem',
		},
        body1: {
			// fontFamily: 'Montserrat',
			color: 'white',
			fontSize: '1rem',
			padding: '0.5rem',
		},
        body2: {
            color: 'white',
            fontSize: '0.8rem'
        }
	},
});
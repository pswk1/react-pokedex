import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const useStyles= makeStyles({
    card: {
        height: '50%',
        background: '#444',
        color: 'white',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition:' 0.2s ease-in-out all', 
        marginLeft: '0.5rem',
        marginBottom: '0.5rem'
    }
});

const Card = ({ pokemon }) => {
    const classes = useStyles();
    return (
        <Grid item xs ={12} sm={6} md={4} lg={3} xl={2} className={classes.card}>
            
        </Grid>
    );
};

Card.propTypes = {
    pokemon: PropTypes.object
}

export default Card;

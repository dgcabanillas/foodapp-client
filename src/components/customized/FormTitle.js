import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { withStyles } from '@mui/styles';

const styles = (theme) => ({
    root: {
        fontSize: 28,
        fontWeight: 700,
        marginTop: 12,
        color: theme.palette.primary.main,
    }
});

const FormTitle = ( props ) => {

    const { text, ...other } = props;

    return (
        <Typography 
            { ...other }
            align='center'
            component='h1' 
            variant='subtitle1'
        >
            { text.toUpperCase() }
        </Typography>
    )
}

FormTitle.defaultProps = {
    text: 'NO TITLE',
}

FormTitle.propTypes = {
    text: PropTypes.string,
}

export default withStyles(styles)(FormTitle);

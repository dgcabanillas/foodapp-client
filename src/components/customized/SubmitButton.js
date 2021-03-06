import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const SubmitButton = ( props ) => {

    const { text, ...other } = props;

    return (
        <Button 
            fullWidth
            size='large'
            type='submit'
            color='primary' 
            variant='contained'
            style={{ marginTop: 16 }}
            { ...other }
        > { text } </Button>
    )
}

SubmitButton.defaultProps = {
    text: 'sin texto',
}

SubmitButton.propTypes = {
    text: PropTypes.string,
}

export default SubmitButton

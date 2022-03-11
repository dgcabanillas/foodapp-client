import React from 'react'
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const CTextField = ( props ) => {

  const { errorText, ...other } = props;

  return (
    <TextField
      { ...other }  
      margin='normal'
      variant='outlined'
      size='small'
      error={!!errorText}
      helperText={errorText}
      fullWidth
    />
  )
}

CTextField.defaultProps = {
  errorText: '',
}

CTextField.propTypes = {
  errorText: PropTypes.string,
}

export default CTextField;
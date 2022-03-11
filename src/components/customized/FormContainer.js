import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: ({ width }) => width || 350,
    maxWidth: '90%',
    background: 'rgba(255, 255, 255, .9)',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
    padding: theme.spacing(4, 3),
    backdropFilter: 'blur(10px)',
    ...theme.card,
    borderRadius: 8,
    margin: 'auto',
  }
}))

const FormContainer = ( props ) => {
  const classes = useStyles({ width: props.width });

  return (
    <div className={classes.root}>
      { props.children }
    </div>
  )
}

FormContainer.propTypes = {
  width: PropTypes.number,
}

export default FormContainer;
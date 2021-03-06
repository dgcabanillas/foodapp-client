import React, { useState } from 'react'
import CtextField from './CTextField';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const CPasswordField = ( props ) => {

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => { setShowPassword( !showPassword ); }
  const handleMouseDownPassword = (e) => { e.preventDefault(); }

  return (
    <CtextField 
      { ...props }
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
} 

export default CPasswordField;

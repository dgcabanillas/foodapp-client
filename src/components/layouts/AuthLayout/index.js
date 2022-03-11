import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Background from 'src/shared/Bacground';
import AppContext from 'src/context/app/app.context';
import styles from './styles.module.scss';

const AuthLayout = () => {
  const { authBackground } = useContext(AppContext);

  return (
    <Background image={authBackground}>
      <Container maxWidth='md' className={styles.container}>
        <Outlet />
      </Container>
    </Background>
  )
}

export default AuthLayout
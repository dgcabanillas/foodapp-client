import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'src/shared/Container';
import styles from './style.module.scss';

const MainSection = () => {
  return (
    <Container>
      <div className={styles['main-section']}>
        <div className={styles['main-section__description']}>
          <h1 className={styles['main-section__name']}> FoodApp </h1>
          <p className={styles['main-section__text']}> Encuentra tus antojos favoritos en los mejores lugares. </p>
          <p className={styles['main-section__text']}> Ahorra tiempo y aprovéchalo en disfrutar tus alimentos </p>
          <Link to='/restaurants' className={styles['main-section__button']}>
            visitar restaurantes
          </Link>
        </div>
        <img 
          className={styles['main-section__image']} 
          src='images/food_image_1.png' 
          alt='Example Food'
        />
      </div>
    </Container>
  )
}

export default MainSection
import styles from './style.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img 
        className={styles.logo__image}
        src="images/foodapp_logo.png" 
        alt='Food App Logo'
      />
      <span className={styles.logo__text}> FoodApp </span>
    </div>
  )
}

export default Logo;
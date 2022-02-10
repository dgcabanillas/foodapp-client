import styles from './style.module.scss';

const IconBurger = ({ open }) => {
  return (
    <div className={`${styles['icon-burger']} ${open ? styles['icon-burger--open'] : ''}`}>
      <div className={styles['icon-burger__content']}>
        <div className={styles['icon-burger__line']} />
        <div className={styles['icon-burger__line']} />
        <div className={styles['icon-burger__line']} />
      </div>
    </div>
  )
}

export default IconBurger;
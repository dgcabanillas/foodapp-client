import { Link } from "react-router-dom";
import styles from './style.module.scss';

const MenuLink = ({ to, text }) => {
  return (
    <Link to={to} className={styles['menu-link']}>
      <span className={styles['menu-link__text']}>{ text }</span>
    </Link>
  )
}

export default MenuLink;
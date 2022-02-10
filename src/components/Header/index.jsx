import Logo from "src/shared/Logo";
import Menu from "./components/Menu";
import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  )
}

export default Header;
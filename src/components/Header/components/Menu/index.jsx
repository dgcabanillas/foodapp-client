import { useEffect } from 'react';
import IconBurger from 'src/shared/IconBurger';
import { useToggle } from 'src/hooks/useToggle';
import { useWindowSize } from 'src/hooks/useWindowSize';
import MenuLink from '../MenuLink';
import styles from './style.module.scss';

const links = [
  { id: 1, to: '/', text: 'inicio' },
  { id: 2, to: '/', text: 'aliados' },
  { id: 3, to: '/', text: 'nosotros' },
  { id: 4, to: '/', text: 'servicios' },
]

const Menu = () => {
  const { open, toggle: toggleMenu, close: closeMenu } = useToggle();
  const { width } = useWindowSize();

  useEffect(() => { (width > 768) && closeMenu() }, [width])

  return (
    <div className={`${styles.menu} ${open ? styles['menu--open'] : ''}`}>
      <button 
        onClick={toggleMenu}
        className={styles.menu__button}
      >
        <IconBurger open={open}/>
      </button>
      <nav className={styles.menu__links}>
        { links.map(({ id, to, text }) => <MenuLink key={id} to={to} text={text}/> )}
      </nav>
    </div>
  )
}

export default Menu;

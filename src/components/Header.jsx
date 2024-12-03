import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Adivinanzas Interactivas</h1>
    <nav>
      <ul className={styles.navList}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;

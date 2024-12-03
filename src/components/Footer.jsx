import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; 2024 Adivinanzas Interactivas. Todos los derechos reservados.</p>
    <ul className={styles.socials}>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Instagram</a></li>
    </ul>
  </footer>
);

export default Footer;

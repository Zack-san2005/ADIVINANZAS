import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AdivinanzaContainer from './components/AdivinanzaContainer';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <AdivinanzaContainer />
      <Footer />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import styles from '../styles/Adivinanza.module.css';

const Adivinanza = ({ numero, pregunta, respuesta }) => {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const manejarClick = () => {
    setMostrarRespuesta(!mostrarRespuesta);
  };

  return (
    <div className={styles.card}>
      <h3>Adivinanza {numero}</h3>
      <p>{pregunta}</p>
      <button className={styles.boton} onClick={manejarClick}>
        👁️
      </button>
      {mostrarRespuesta && <p className={styles.respuesta}>{respuesta}</p>}
    </div>
  );
};

export default Adivinanza;

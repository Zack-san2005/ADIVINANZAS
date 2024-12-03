import React, { useEffect, useState } from 'react';
import Adivinanza from './Adivinanza';
import styles from '../styles/AdivinanzaContainer.module.css';

const AdivinanzaContainer = () => {
  const [adivinanzas, setAdivinanzas] = useState([]);

  useEffect(() => {
    const cargarAdivinanzas = async () => {
      try {
        const respuesta = await import('../data/adivinanzas.json');
        setAdivinanzas(respuesta.default);
      } catch (error) {
        console.error('Error al cargar las adivinanzas:', error);
      }
    };

    cargarAdivinanzas();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Adivinanzas</h2>
      <div className={styles.grid}>
        {adivinanzas.map((adivinanza) => (
          <Adivinanza
            key={adivinanza.numero}
            numero={adivinanza.numero}
            pregunta={adivinanza.pregunta}
            respuesta={adivinanza.respuesta}
          />
        ))}
      </div>
    </div>
  );
};

export default AdivinanzaContainer;

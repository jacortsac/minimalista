import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

const EmpresaDescription = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      easing: 'ease-in-out', // Efecto de la animación
      once: true, // Solo se ejecuta una vez cuando entra en el campo de visión
    });
  }, []);

  return (
    <div style={styles.container}>
      <h2 data-aos="fade-up" style={styles.title}>¿Quiénes Somos?</h2>
      <p data-aos="fade-up" style={styles.description}>
        Somos una empresa dedicada a la innovación tecnológica, ofreciendo soluciones avanzadas
        en el campo de la informática y la electrónica. Nuestros productos están diseñados
        para satisfacer las necesidades de los usuarios más exigentes, desde dispositivos
        móviles hasta equipos de computación de alto rendimiento. Con un enfoque en la calidad,
        confiabilidad y servicio al cliente, estamos comprometidos en ofrecer siempre lo mejor.
      </p>

      <h3 data-aos="fade-right" style={styles.subtitle}>Nuestra Misión</h3>
      <p data-aos="fade-right" style={styles.description}>
        Nuestra misión es liderar la industria tecnológica con productos que cambian el mundo y
        mejorar la experiencia de nuestros clientes mediante la constante innovación, ofreciendo
        soluciones personalizadas y de alto rendimiento a precios accesibles.
      </p>

      <h3 data-aos="fade-left" style={styles.subtitle}>Nuestros Valores</h3>
      <ul data-aos="fade-left" style={styles.list}>
        <li>Innovación constante</li>
        <li>Compromiso con la calidad</li>
        <li>Servicio al cliente excepcional</li>
        <li>Responsabilidad social</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.125rem',
    color: '#555',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#333',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    textAlign: 'left',
    fontSize: '1.125rem',
    color: '#555',
  },
};

export default EmpresaDescription;

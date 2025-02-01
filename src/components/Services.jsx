

const Services = () => {
  const services = [
    { title: 'Diseño Web', description: 'Creamos sitios web modernos y responsivos.', icon: '🌐' },
    { title: 'Marketing Digital', description: 'Mejora tu presencia en línea.', icon: '📈' },
    { title: 'Consultoría', description: 'Asesoramiento profesional para tu negocio.', icon: '💼' },
  ];

  return (
    <section id="services" style={{ padding: '40px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Nuestros Servicios</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {services.map((service, index) => (
          <div key={index} style={{ textAlign: 'center', maxWidth: '250px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;


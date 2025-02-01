
import './Contact.css'; // Importa los estilos

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contáctanos</h2>
      <form>
        <input 
          type="text" 
          placeholder="Tu Nombre" 
          required 
        />
        <input 
          type="email" 
          placeholder="Tu Correo Electrónico" 
          required 
        />
        <textarea 
          placeholder="Tu Mensaje" 
          rows="5" 
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;


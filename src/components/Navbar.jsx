

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Empresa</div>
      <ul className="nav-links">
        <li><a href="#services">Servicios</a></li>
        <li><a href="#about">Sobre Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

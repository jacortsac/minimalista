import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EmpresaDescription from './EmpresaDescription';
import Services from './components/Services';
import Contact from './components/Contact';
import CarruselProductos from './components/CarruselProductos';
import PieDePagina from './PieDePagina'
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EmpresaDescription/>
      <Services />
      <CarruselProductos/>
      <Contact/>
     
      <PieDePagina/>
    </div>
  );
}

export default App;



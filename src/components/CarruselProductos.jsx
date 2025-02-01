import React, { useMemo, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import jesusImage from "../assets/JESUS.jpg";

const generateProducts = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Producto ${index + 1}`,
    image: jesusImage,
    price: (Math.random() * 100).toFixed(2),
  }));
};

const CarruselProductos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(generateProducts());
  }, []);

  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }), []);

  const styles = {
    carouselContainer: {
      width: "100%", // Ancho completo de la pantalla
      padding: "2.5rem 1rem",
      margin: "0 auto",
    },
    carouselTitle: {
      textAlign: "center",
      fontSize: "2rem", // Título más grande
      fontWeight: "bold",
      marginBottom: "2rem",
    },
    productCard: {
      padding: "1rem",
      width: "100%", // Aseguramos que cada tarjeta ocupe el 100% del espacio del carrusel
    },
    productCardContent: {
      backgroundColor: "white",
      padding: "1rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "0.5rem",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.3s ease",
    },
    productImage: {
      width: "100%", // Imagen al 100% del ancho
      height: "16rem", // Ajusta la altura según lo necesites
      objectFit: "cover", // Mantiene la proporción y cubre todo el espacio
      borderRadius: "0.5rem",
      marginBottom: "1rem",
    },
    productName: {
      fontSize: "1.125rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
    },
    productPrice: {
      color: "#4b5563", // Gris oscuro
      fontSize: "1rem",
      marginBottom: "1rem",
    },
    viewProductButton: {
      marginTop: "1rem",
      padding: "0.5rem 1rem",
      backgroundColor: "#3b82f6", // Azul
      color: "white",
      borderRadius: "0.375rem", // Bordes redondeados
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      textDecoration: "none", // Eliminar subrayado del botón
    },
    viewProductButtonHover: {
      backgroundColor: "#2563eb", // Azul más oscuro en hover
    },
    // Estilo para el hover del producto
    productCardHover: {
      transform: "scale(1.05)", // Aumenta el tamaño ligeramente
    },
  };

  return (
    <div style={styles.carouselContainer}>
      <h2 style={styles.carouselTitle}>Nuestros Productos</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <div 
              style={{ ...styles.productCardContent, ":hover": styles.productCardHover }}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                style={styles.productImage} 
              />
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productPrice}>${product.price}</p>
              <button 
                style={styles.viewProductButton} 
                onClick={() => window.location.href = `/producto/${product.id}`}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.viewProductButtonHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = styles.viewProductButton.backgroundColor}
              >
                Ver producto
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarruselProductos;




import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #1f2937; /* Gris oscuro */
  color: #ffffff; /* Texto blanco */
  padding: 3rem 1rem;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  width: 30%;
`;

const FooterTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #d1d5db; /* Gris claro */
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #4b5563; /* Gris más claro */
  transition: color 0.3s ease;

  &:hover {
    color: #3b82f6; /* Azul en hover */
  }
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterSocialLink = styled.a`
  text-decoration: none;
  color: #4b5563; /* Gris más claro */
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3b82f6; /* Azul en hover */
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #d1d5db; /* Gris claro */
  margin-top: 1rem;
`;

const PieDePagina = () => {
  return (
    <Footer>
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Sobre Nosotros</FooterTitle>
            <FooterText>
              Somos una empresa dedicada a ofrecer los mejores productos
              tecnológicos para ti. Con más de 10 años en el mercado, brindamos
              la mejor calidad y servicio.
            </FooterText>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Enlaces Rápidos</FooterTitle>
            <FooterLinks>
              <FooterLinkItem>
                <FooterLink href="/quienes-somos">Quiénes Somos</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="/productos">Productos</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="/contactos">Contactos</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="/ubicacion">Ubicación</FooterLink>
              </FooterLinkItem>
            </FooterLinks>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Síguenos</FooterTitle>
            <FooterSocial>
              <FooterSocialLink
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </FooterSocialLink>
              <FooterSocialLink
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </FooterSocialLink>
              <FooterSocialLink
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </FooterSocialLink>
            </FooterSocial>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          <p>© 2025 Tu Empresa. Todos los derechos reservados.</p>
        </FooterBottom>
      </FooterContainer>
    </Footer>
  );
};

export default PieDePagina;

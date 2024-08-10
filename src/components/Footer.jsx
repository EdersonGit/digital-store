import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';

const FooterContainer = styled.footer`
  background-color: #1F1F1F; 
  color: #FFFFFF; 
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 70px 50px 20px 50px;
  
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Description = styled.div`
  max-width: 350px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  text-align: left;
  padding-top: 30px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 35px;
  margin-top: 40px;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1F1F1F;
  color: #FFFFFF;
  padding: 20px;
  font-size: 13px;
  
  p {
    font-family: Inter;
    font-size: 13px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    margin-bottom: 10px;
    padding-top: 20px;
  }

  hr {
    width: 95%;
    opacity: 30%;
  }
`;

const InfoComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 210px;

  h3 {
    font-size: 18px;
    margin-bottom: 40px;
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 21.78px;
    text-align: left;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;

      a {
        color: #FFFFFF;
        text-decoration: none;
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 26px;
        text-align: left;
      }
    }
  }
`;

const InfoComponent = ({ title, informations }) => {
  return (
    <InfoComponentContainer>
      <h3>{title}</h3>
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <a href={info.link}>{info.text}</a>
          </li>
        ))}
      </ul>
    </InfoComponentContainer>
  );
};

const Footer = () => {
  const informations = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Segurança', link: '/security' },
    { text: 'Wishlist', link: '/wishlist' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe conosco', link: '/careers' },
    { text: 'Meus Pedidos', link: '/orders' },
  ];

  const categorias = [
    { text: 'Camisetas', link: '/shirts' },
    { text: 'Calças', link: '/pants' },
    { text: 'Bonés', link: '/caps' },
    { text: 'Headphones', link: '/headphones' },
    { text: 'Tênis', link: '/shoes' },
  ];

  const contato = [
    { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161', link: '' },
    { text: '(85) 3051-3411', link: '' },
  ];

  return (
    <>
      <FooterContainer>
        <LogoContainer>
          <Logo white />
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</Description>
          <SocialIcons>
            <a href="https://www.facebook.com/digitalcollegealdeota/" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/digitalcollegebr/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://twitter.com/eaicollegers" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </SocialIcons>
        </LogoContainer>
        <InfoComponent title="Informação" informations={informations} />
        <InfoComponent title="Categorias" informations={categorias} />
        <InfoComponent title="Contato" informations={contato} />
      </FooterContainer>
      <FooterBottom>
        <hr />
        <p>© 2024 Digital Store</p>
      </FooterBottom>
    </>
  );
};

export default Footer;

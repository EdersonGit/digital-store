import React from 'react';
import Layout from '../pages/Layout';
import Section from '../components/Section';
import ProductList from '../components/ProductListing';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import Ofertas from '../components/Ofertas';
import CollectionsSection from '../components/CollectionsSection';
import CollectionIcon from '../components/collectionIcons';
import Circle from '../assets/circle.svg';
import styled from 'styled-components';

const TextoContainer = styled.div`
  display: flex;
  position: relative;
  text-align: left;
  flex-direction: column;
  padding-bottom: 100px;

  h4 {
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: #f6aa1c;
    margin-bottom: 25px;
  }

  h1 {
    color: #1F1F1F;
    font-family: Inter;
    font-size: 64px;
    font-weight: 800;
    line-height: 66px;
    letter-spacing: 1px;
    margin-bottom: 25px;
    max-width: 600px;
  }

  p {
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0.75px;
    color: #474747;
    margin-bottom: 30px;
    max-width: 500px;
  }
`;

const ImgContainer = styled.img`
  display: flex;
  position: absolute;
  left: 1200px;
  width: 140px;
  top: 01px;
  opacity: 0.4px;

`;

const Button = styled.button`
  width: 220px;
  height: 48px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-align: center;
  border-radius: 10px;
  background-color: #c92071;
  border: none;
  color: #f5f5f5;

  &:hover {
    cursor: pointer;
    background-color: #991956;
  }
`;

const images = [
  { src: 'https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~T1nym5UMhMCBli2bxeTYe7qKetctWTfNRdWB~fKEWzsDFteFmWMrWifMlKgy~2hVZtcqd3egO5brCZHrIp~yW4iZhUhfbLkwFV2UUrfgqfwh1KamQSzDo-OB9mKa-ji9VOuQw~dTBLtA0Tk6gEUWKAXkcfz6P4S0~egU4tNxMlIBh1KKpbWdEBfK5-mhASfS9IsoQaugDVESkuvXdE4wWKA2l0VZF42n6jLEwtbnNRKaa6iEUodi2fkK7N93n27sY1Ol8MsA4nlAzbvHzvnP-jB9Qi99~SKfNIqCy0By0fAfzjChy9MWzXspBrKH9cRU7w5s-GF6s29uPcPrPT8Q__' },

  { src: 'https://imgnike-a.akamaihd.net/1920x1920/011224IDA11.jpg' },

  { src: 'https://imgnike-a.akamaihd.net/1920x1920/025803IDA9.jpg' },

  { src: 'https://imgnike-a.akamaihd.net/1920x1920/005498MTA9.jpg' }
];

const HomePage = () => {
  return (
    <Layout>
      <Gallery width="auto" height="681px" images={images} customStyle={true}>
        <ImgContainer  src={Circle} alt="circle"  />
        <TextoContainer>
          <h4>Melhores ofertas personalizadas</h4>
          <h1>Queima de stoque Nike 🔥</h1>
          <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
          <Button>Ver Ofertas</Button>
        </TextoContainer>
      </Gallery>
      <Section title="Coleções em destaque">
        <CollectionsSection />
      </Section>

      <Section title="Coleções em destaque" titleAlign="center">
        <CollectionIcon />
      </Section>

      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={{ text: 'Ver todos', href: '/produtos' }}
      >
        <ProductList products={Products} />
      </Section>
      <Ofertas />
    </Layout>
  );
};

export default HomePage;

import React from 'react';
import Layout from '../pages/Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import ProductListing from '../components/ProductListing';
import Section from '../components/Section';
import styled from 'styled-components';

const ViewContainer = styled.div`
  background-color: #F9F8FE;
  display: flex;
  padding-top: 70px;
  padding-bottom: 50px;
`;
const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 50px;
  background-color: #F9F8FE;
`;

const images = [
  { src: 'https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~T1nym5UMhMCBli2bxeTYe7qKetctWTfNRdWB~fKEWzsDFteFmWMrWifMlKgy~2hVZtcqd3egO5brCZHrIp~yW4iZhUhfbLkwFV2UUrfgqfwh1KamQSzDo-OB9mKa-ji9VOuQw~dTBLtA0Tk6gEUWKAXkcfz6P4S0~egU4tNxMlIBh1KKpbWdEBfK5-mhASfS9IsoQaugDVESkuvXdE4wWKA2l0VZF42n6jLEwtbnNRKaa6iEUodi2fkK7N93n27sY1Ol8MsA4nlAzbvHzvnP-jB9Qi99~SKfNIqCy0By0fAfzjChy9MWzXspBrKH9cRU7w5s-GF6s29uPcPrPT8Q__',   bgColor: '#E2E3FF' },
  { src: 'https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~T1nym5UMhMCBli2bxeTYe7qKetctWTfNRdWB~fKEWzsDFteFmWMrWifMlKgy~2hVZtcqd3egO5brCZHrIp~yW4iZhUhfbLkwFV2UUrfgqfwh1KamQSzDo-OB9mKa-ji9VOuQw~dTBLtA0Tk6gEUWKAXkcfz6P4S0~egU4tNxMlIBh1KKpbWdEBfK5-mhASfS9IsoQaugDVESkuvXdE4wWKA2l0VZF42n6jLEwtbnNRKaa6iEUodi2fkK7N93n27sY1Ol8MsA4nlAzbvHzvnP-jB9Qi99~SKfNIqCy0By0fAfzjChy9MWzXspBrKH9cRU7w5s-GF6s29uPcPrPT8Q__',   bgColor: '#FFE8BC' },
  { src: 'https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~T1nym5UMhMCBli2bxeTYe7qKetctWTfNRdWB~fKEWzsDFteFmWMrWifMlKgy~2hVZtcqd3egO5brCZHrIp~yW4iZhUhfbLkwFV2UUrfgqfwh1KamQSzDo-OB9mKa-ji9VOuQw~dTBLtA0Tk6gEUWKAXkcfz6P4S0~egU4tNxMlIBh1KKpbWdEBfK5-mhASfS9IsoQaugDVESkuvXdE4wWKA2l0VZF42n6jLEwtbnNRKaa6iEUodi2fkK7N93n27sY1Ol8MsA4nlAzbvHzvnP-jB9Qi99~SKfNIqCy0By0fAfzjChy9MWzXspBrKH9cRU7w5s-GF6s29uPcPrPT8Q__',   bgColor: '#FFC0BC' },
  { src: 'https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~T1nym5UMhMCBli2bxeTYe7qKetctWTfNRdWB~fKEWzsDFteFmWMrWifMlKgy~2hVZtcqd3egO5brCZHrIp~yW4iZhUhfbLkwFV2UUrfgqfwh1KamQSzDo-OB9mKa-ji9VOuQw~dTBLtA0Tk6gEUWKAXkcfz6P4S0~egU4tNxMlIBh1KKpbWdEBfK5-mhASfS9IsoQaugDVESkuvXdE4wWKA2l0VZF42n6jLEwtbnNRKaa6iEUodi2fkK7N93n27sY1Ol8MsA4nlAzbvHzvnP-jB9Qi99~SKfNIqCy0By0fAfzjChy9MWzXspBrKH9cRU7w5s-GF6s29uPcPrPT8Q__',   bgColor: '#DEC699' },
  { src: 'https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~T1nym5UMhMCBli2bxeTYe7qKetctWTfNRdWB~fKEWzsDFteFmWMrWifMlKgy~2hVZtcqd3egO5brCZHrIp~yW4iZhUhfbLkwFV2UUrfgqfwh1KamQSzDo-OB9mKa-ji9VOuQw~dTBLtA0Tk6gEUWKAXkcfz6P4S0~egU4tNxMlIBh1KKpbWdEBfK5-mhASfS9IsoQaugDVESkuvXdE4wWKA2l0VZF42n6jLEwtbnNRKaa6iEUodi2fkK7N93n27sY1Ol8MsA4nlAzbvHzvnP-jB9Qi99~SKfNIqCy0By0fAfzjChy9MWzXspBrKH9cRU7w5s-GF6s29uPcPrPT8Q__',   bgColor: '#E8DFCF' },
];

const products = [
  {
    id: 1,
    name: "Air Jordan 12 - Masculino",
    category: "Tênis",
    image: "https://image.goat.com/750/attachments/product_template_pictures/images/021/042/384/original/500924_00.png.png",
    price: 999,
    discountPercentage: 30,
  },
  {
    id: 2,
    name: "Air Jordan 1 - Masculino",
    category: "Tênis",
    image: "https://image.goat.com/attachments/product_template_pictures/images/012/219/518/original/335047_00.png.png",
    price: 899,
    discountPercentage: 30,
  },
  {
    id: 3,
    name: "Air Max 90 - Masculino",
    category: "Tênis",
    image: "https://image.goat.com/750/attachments/product_template_pictures/images/017/794/455/original/394710_00.png.png",
    price: 799,
    discountPercentage: 30,
  },
  {
    id: 4,
    name: "Air Force 1 - Feminino",
    category: "Tênis",
    image: "https://image.goat.com/750/attachments/product_template_pictures/images/013/832/092/original/306892_00.png.png",
    price: 699,
    discountPercentage: 30,
  },
];


const ProductViewPage = () => {
  return (
    <Layout>
      <ViewContainer>
        <GalleryContainer>
          <Gallery
            images={images}
            showThumbs={true}
            width="700px"
            height="570px"
            radius="4px"
          />
        </GalleryContainer>
        <BuyBox
          name="Tênis Nike Revolution 6 Next Nature Masculino"
          reference="Casual | Nike | REF:38416711"
          stars={4.5}
          rating={200}
          price={300}
          priceDiscount={250}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        >
          <ProductOptions
            options={["39", "40", "41", "42", "43"]}
            shape="square"
            type="text"
            radius="4px"
          />
          <ProductOptions
            options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]}
            shape="circle"
            type="color"
          />
        </BuyBox>
      </ViewContainer>
      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/produtos" }}
      >
        <ProductListing products={products} />
      </Section>

    </Layout>
  );
};

export default ProductViewPage;

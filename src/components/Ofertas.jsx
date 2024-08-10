import React from 'react';
import styled from 'styled-components';
import Jordan from '../assets/JordanOferta.svg'; 
import Circle from '../assets/CircleOferta.svg';

const GalleryWrapper = styled.div`
  width: 100%;
  height: 553px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const SlideContent = styled.div`
  flex: 1;
  text-align: left;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.75px;
    text-align: left;
    color: #C92071;
    margin-bottom: 20px;
  }

  h2 {
    font-family: Inter, sans-serif;
    font-size: 48px;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 25px;
    color: #474747;
  }

  p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
    text-align: left;   
    color: #474747;
    margin-bottom: 30px;
  }

  button {
    width: 200px;
    height: 40px;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.75px;
    text-align: center;
    border-radius: 10px;
    background-color: #C92071;
    border: none;
    color: #F5F5F5;

    &:hover {
      cursor: pointer;
      background-color: #991956;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleImage = styled.img`
  width: 466px;
  height: 466px;
  position: absolute;
  z-index: 1;
  width: 466px;
  height: 466px;
  left: 129px;
  top: -30px;
`;

const SlideImage = styled.img`
  width: 573px;
  height: 330px;
  position: relative;
  z-index: 2;
`;

const Ofertas = () => {
  return (
    <GalleryWrapper>
      <SlideWrapper>
        <ImageContainer>
          <CircleImage src={Circle} alt="bola" />
          <SlideImage src={Jordan} alt="Air Jordan" />
        </ImageContainer>
        <SlideContent>
          <h4>Oferta especial</h4>
          <h2>Air Jordan edição de colecionador</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <button>Ver Oferta</button>
        </SlideContent>
      </SlideWrapper>
    </GalleryWrapper>
  );
};

export default Ofertas;

import React from 'react';
import Tshirt from '../assets/tshirt.svg';
import Pants from '../assets/pants.svg';
import Sneaker from '../assets/sneakers.svg';
import Headphone from '../assets/headphones.svg'; 
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 30px 0px; 
  margin-bottom: 50px;

`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  background-color: #FFFFFF;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  padding: 3px;
  transition: filter 0.3s ease;

  &:hover{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;

const ImageLabel = styled.span`
  font-family: Inter;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.75px;
  text-align: center;
  color: #474747;

`;

const CollectionIcon = () => (
  <ImageContainer>

    <ImageWrapper>
      <Image src={Tshirt} alt="Camiseta" />
      <ImageLabel>Camisetas</ImageLabel>
    </ImageWrapper>

    <ImageWrapper>
      <Image src={Pants} alt="Calça" />
      <ImageLabel>Calças</ImageLabel>
    </ImageWrapper>

    <ImageWrapper>
      <Image src={Pants} alt="Calça" />
      <ImageLabel>Bonés</ImageLabel>
    </ImageWrapper>

    <ImageWrapper>
      <Image src={Headphone} alt="Fone de ouvido" />
      <ImageLabel>Headphones</ImageLabel>
    </ImageWrapper>

    <ImageWrapper>
      <Image src={Sneaker} alt="Tênis" />
      <ImageLabel>Tênis</ImageLabel>
    </ImageWrapper>

  </ImageContainer>
);

export default CollectionIcon;

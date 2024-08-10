import React from 'react';
import styled from 'styled-components';
import collection1 from '../assets/collection-1.png';
import collection2 from '../assets/collection-2.png';
import collection3 from '../assets/collection-3.png';

const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  width: 405px;
  height: 251px;
  background-color: #E5E5E5;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #E7FF86;
  color: #1F1F1F;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
`;

const Button = styled.button`
  position: absolute;
  bottom: 30px;
  border-radius: 8px;
  left: 25%;
  transform: translateX(-50%);
  background-color: #F5F5F5;
  color: #C92071;
  border: none;
  width: 153px;
  height: 48px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #B5B6F2;
    color: #F5F5F5;
  }
  p{  
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-align: center;
  }
`;

const CollectionsSection = () => (
  <ImageContainer>
    
    <ImageWrapper>
      <DiscountBadge>30% OFF</DiscountBadge>
      <Image src={collection1} alt="Coleção 1" />
      <Button><p>Comprar</p></Button> 
    </ImageWrapper>

    <ImageWrapper>
      <DiscountBadge>30% OFF</DiscountBadge>
      <Image src={collection2} alt="Coleção 2" />
      <Button><p>Comprar</p></Button>
    </ImageWrapper>

    <ImageWrapper>
      <DiscountBadge>30% OFF</DiscountBadge>
      <Image src={collection3} alt="Coleção 3" />
      <Button><p>Comprar</p></Button>
    </ImageWrapper>
    
  </ImageContainer>
);

export default CollectionsSection;

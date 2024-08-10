import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import starIcon from '../assets/star-icon.svg';
import Starwhite from '../assets/starwhite.svg';

const BuyBoxWrapper = styled.div`
  padding-left: 30px;
  border-radius: 4px;
  background-color: #F9F8FE; 
`;

const ProductName = styled.h1`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.9999998807907104px;
  text-align: left;
  color: #1F1F1F;
  max-width: 400px;
`;

const ProductReference = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #666666;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StarsContainer = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.25px;
  text-align: left;
  color: #FFFFFF;
  background-color: #FFB31F;
  padding: 3px 12px;
  gap: 10px;
  border-radius: 4px;
`;

const ProductStars = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 20px;
  gap: 10px;
`;

const ProductRating = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-align: left;
  color: #8F8F8F;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.9999998807907104px;
  text-align: left;
  color: #474747;
  padding-bottom: 15px;

  p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
    text-align: left;
    color: #474747;
  }

  .segundo {
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.75px;
    text-align: left;
    color: #474747;
  }

  .original-price {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
    text-align: left;
    color: #CCCCCC;
    text-decoration: line-through;
    margin-right: 10px;
    padding-left: 10px;
  }
`;

const ProductDescription = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-align: left;
  color: #474747;
  max-width: 450px;
  padding-bottom: 30px;
`;

const BuyButton = styled.button`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-align: center;
  width: 220px;
  height: 48px;
  color: #F5F5F5;
  background-color: #FFB31F;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    background-color: #f5a505;
  }
`;

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <BuyBoxWrapper role="complementary">
      <ProductName>{name}</ProductName>
      <ProductReference>{reference}</ProductReference>
      <ProductStars>
        <img src={starIcon} alt="Star" />
        <StarsContainer>
          {stars} <img src={Starwhite} alt="white" />
        </StarsContainer>
        <ProductRating>({rating} avaliações)</ProductRating>
      </ProductStars>
      <ProductPrice>
        <p>R$</p> {priceDiscount || price} <p className='segundo'>,00</p>
        {priceDiscount && <span className="original-price">{price},00</span>}
      </ProductPrice>
      <ProductDescription>
        <h4>Descrição do produto</h4>
        {description}
      </ProductDescription>
      {children}
      <BuyButton aria-label={`Comprar ${name}`}>COMPRAR</BuyButton>
    </BuyBoxWrapper>
  );
};

BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BuyBox;

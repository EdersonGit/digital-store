import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 292px;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-15px);
    cursor: pointer;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 8px;
  box-shadow: -3.61px 4.52px 6.52px 0px #00000007;
`;

const ProductImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  right: 20px;
  width: 292px;
  height: 321px;
  object-fit: cover;
  rotate: -30deg;
  transform: scaleX(-1);
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #E7FF86;
  color: #1F1F1F;
  font-weight: bold;
  font-size: 0.9rem;
`;

const ProductInfo = styled.div`
  padding: 16px;
  text-align: left;
`;

const ProductName = styled.h3` 
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0.75px;
  text-align: left;
  color: #474747;
`;

const ProductCategory = styled.div`
  font-size: 0.9rem;
  color: #8F8F8F;
  margin-bottom: 8px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.div`
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0.75px;
  text-align: left;

  color: ${props => (props.$discount ? '#8F8F8F' : '#474747')};
  text-decoration: ${props => (props.$discount ? 'line-through' : 'none')};
`;

const DiscountPrice = styled.div`
  font-size: 24px;
  color: #474747;
  font-family: Inter;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0.75px;
  text-align: left;
`;

const calculateDiscountPrice = (price, discountPercentage) => {
  return price - (price * discountPercentage / 100);
};

const ProductCard = ({ image, name, category, price, discountPercentage, id }) => {
  const navigate = useNavigate();

  const discountPrice = discountPercentage ? calculateDiscountPrice(price, discountPercentage) : null;

  const handleCardClick = () => {
    navigate(`/produtos/${id}`);
  };

  return (
    <Card onClick={handleCardClick}> 
      <ProductImageContainer>
        {discountPercentage && <DiscountBadge>{`${discountPercentage}% OFF`}</DiscountBadge>}
        <ProductImage src={image} alt={`Image of ${name}`} />
      </ProductImageContainer>
      <ProductInfo>
        <ProductCategory>{category}</ProductCategory>
        <ProductName>{name}</ProductName>
        <PriceContainer>
          <Price $discount={discountPrice}>{` R$ ${price.toFixed(2)}`}</Price>
          {discountPrice && <DiscountPrice>{` R$ ${discountPrice.toFixed(2)}`}</DiscountPrice>}
        </PriceContainer>
      </ProductInfo>
    </Card>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number,
};

export default ProductCard;

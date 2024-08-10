import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const ProductListing = ({ products }) => {
  return (
    <ListContainer>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          discountPercentage={product.discountPercentage} 
        />
      ))}
    </ListContainer>
  );
};

const productShape = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number,
};

ProductListing.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(productShape)).isRequired,
};

export default ProductListing;

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 10px;
`;

const OptionItem = styled.div`
  width: ${props => (props.shape === 'circle' ? '31px' : '48px')};
  height: ${props => (props.shape === 'circle' ? '31px' : '46px')};
  border-radius: ${props => (props.shape === 'circle' ? '50%' : props.radius || '0')};
  border: ${props => (props.$isActive ? '2px solid #C92071' : '1px solid #CCCCCC')};
  background-color: ${props => (props.type === 'text' && props.$isActive ? '#C92071' : props.type === 'color' ? props.option : '#FFFFFF')};
  color: ${props => (props.type === 'text' && props.$isActive ? '#FFFFFF' : '#474747')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border 0.2s ease, background-color 0.2s ease, color 0.2s ease;

`;

const OptionText = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-align: center;
`;

const Title = styled.h3`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.75px;
  text-align: left;
  color: #8F8F8F;
  padding-bottom: 16px;
`;

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(prev => (prev === option ? null : option));
  };

  return (
    <div>
      <Title>{type === 'text' ? 'Tamanho' : 'Cor'}</Title>
      <OptionsWrapper>
        {options.map((option, index) => (
          <OptionItem
            key={index}
            shape={shape}
            radius={radius}
            type={type}
            option={option}
            $isActive={selectedOption === option}
            onClick={() => handleOptionClick(option)}
            role="button"
            aria-pressed={selectedOption === option}
            tabIndex="0"
            onKeyPress={(e) => e.key === 'Enter' && handleOptionClick(option)}
          >
            {type === 'text' && <OptionText>{option}</OptionText>}
          </OptionItem>
        ))}
      </OptionsWrapper>
    </div>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'circle']),
  type: PropTypes.oneOf(['color', 'text']).isRequired,
};

export default ProductOptions;

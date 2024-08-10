import React from 'react';
import styled from 'styled-components';
import { FaExclamationCircle } from 'react-icons/fa';

const WarningContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #FEEFB3;
  color: #9F6000;
  width: 600px;
  left: 200px;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled.div`
  margin-right: 12px;
  font-size: 24px;
`;

const MessageText = styled.div`
  font-size: 16px;
  line-height: 1.4;
`;

const ProductWarning = () => {
  return (
    <WarningContainer>
      <IconContainer>
        <FaExclamationCircle />
      </IconContainer>
      <MessageText>Produto não encontrado. Tente realizar uma nova busca.</MessageText>
    </WarningContainer>
  );
};

export default ProductWarning;

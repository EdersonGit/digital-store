import React from 'react';
import styled from 'styled-components';
import defaultLogo from '../assets/logo-header.svg'; 
import whiteLogo from '../assets/logo-footer.svg';

const LogoImage = styled.img`
  width: 253px;
  height: 44px;
`;

const Logo = ({ white }) => {
  return <LogoImage src={white ? whiteLogo : defaultLogo} alt="Logomarca" />;
};

export default Logo;
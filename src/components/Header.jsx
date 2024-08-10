import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Cart from '../assets/mini-cart.svg';
import { CiSearch } from 'react-icons/ci';

const HeaderContainer = styled.header`
  padding: 35px 0px 0px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
`;

const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 30px;

  input {
    background-color: #F5F5F5;
    width: 100%;
    height: 40px;
    padding: 10px 40px 8px 8px; 
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
  }

  button {
    position: absolute;
    right: 15px;
    border: none;
    background: none;
    cursor: pointer;
    color: #8F8F8F;
    font-size: 2rem;
    opacity: 70%;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
  margin-bottom: 30px;
  padding-left: 40px;
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.75px;

  a {
    margin: 0 15px;
    text-decoration: none;
    color: #474747;
    position: relative;

    &.active {
      color: #C92071;
      font-weight: bold;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #C92071;
      }
    }

    &:hover {
      color: #C92071;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 10px;
    text-decoration: none;
    color: #474747;

    &:hover {
      cursor: pointer;
      color: #C92071;
    }
  }

  .register-link {
    font-size: 16px;
    color: #474747;
    text-decoration: underline;
    margin-left: 45px;
  }

  .login-button {
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.75px;
    text-align: center;
    background-color: #C92071;
    color: white;
    padding: 10px 20px;
    width: 114px;
    height: 40px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-inline: 35px;

    &:hover {
      background-color: #991956;
    }
  }

  .cart-icon {
    cursor: pointer;
    margin-inline: 10px;
    padding-right: 40px;
  }
`;

const MainNav = () => {
  return (
    <NavContainer>
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink 
        to="/produtos" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Produtos
      </NavLink>
      <NavLink 
        to="/categorias" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Categorias
      </NavLink>
      <NavLink 
        to="/meus-pedidos" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Meus Pedidos
      </NavLink>
    </NavContainer>
  );
};

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/produtos?filter=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchBar>
      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        aria-label="Campo de busca"
      />
      <button onClick={handleSearch} aria-label="Buscar">
        <CiSearch />
      </button>
    </SearchBar>
  );
};

const Header = () => {
  return (
    <HeaderContainer>
      <TopSection>
        <Logo />
        <SearchInput />
        <Actions>
          <a to="/cadastro" className="register-link" aria-label="Cadastre-se">
            Cadastre-se
          </a>
          <button className="login-button" aria-label="Entrar">
            Entrar
          </button>
          <img src={Cart} className="cart-icon" alt="carrinho" />
        </Actions>
      </TopSection>
      <MainNav />
    </HeaderContainer>
  );
};

export default Header;

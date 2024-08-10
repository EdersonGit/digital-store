import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './Layout';
import FilterGroup from '../components/FilterGroup';
import ProductListing from '../components/ProductListing';
import Section from '../components/Section';
import OrderSelect from '../components/OrderSelect';
import ProductWarning from '../components/ProductWarning ';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 20px;
`;

const FilterContainer = styled.div`
  width: 100%;
  max-width: 308px;
  margin-left: 20px;
  background-color: #FFFFFF;
  border-radius: 4px;

  h2 {
    font-size: 16px;
    color: #474747;
    font-family: Inter;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.75px;
    text-align: left;
    margin-left: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Divider = styled.hr`
  display: flex;
  position: relative;
  border: 1px solid #CCCCCC;
  margin-bottom: 16px;
  width: 80%;
  left: 30px;
`;

const ContentArea = styled.div`
  flex: 1;

  p{
    font-size: 50px;
  }
`;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductListingPage = () => {
  const query = useQuery();
  const filter = query.get('filter') || '';
  const [selectedFilters, setSelectedFilters] = useState({
    Marca: [],
    Categoria: [],
    Gênero: [],
    Estado: 'Todos',
  });

  const [order, setOrder] = useState('low-to-high');

  const handleFilterChange = (title, inputType, value) => {
    setSelectedFilters((prev) => {
      if (inputType === 'checkbox') {
        const current = prev[title];
        const newSelection = current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value];
        return { ...prev, [title]: newSelection };
      } else {
        return { ...prev, [title]: value };
      }
    });
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const products = [
    {
      marca: "Nike", gender:"Masculino", condition:'Novo',
      id: 1,
      name: "Air Jordan 12 - Masculino",
      category: "Tênis",
      image: "https://image.goat.com/750/attachments/product_template_pictures/images/021/042/384/original/500924_00.png.png",
      price: 999,
      discountPercentage: 30,
    },
    {
      marca: "Nike", gender:"Masculino", condition:'Novo',
      id: 2,
      name: "Air Jordan 1 - Masculino",
      category: "Tênis",
      image: "https://image.goat.com/attachments/product_template_pictures/images/012/219/518/original/335047_00.png.png",
      price: 899,
      discountPercentage: 30,
    },
    {
      marca: "Nike", gender:"Masculino", condition:'Novo',
      id: 3,
      name: "Air Max 90 - Masculino",
      category: "Tênis",
      image: "https://image.goat.com/750/attachments/product_template_pictures/images/017/794/455/original/394710_00.png.png",
      price: 799,
      discountPercentage: 30,
    },
    {
      marca: "Nike", gender:"Feminino", condition:'Novo',
      id: 4,
      name: "Air Force 1 - Feminino",
      category: "Tênis",
      image: "https://image.goat.com/750/attachments/product_template_pictures/images/013/832/092/original/306892_00.png.png",
      price: 699,
      discountPercentage: 30,
    },
    {
      marca: "Adidas", gender:"Masculino", condition:'Novo',
      id: 5,
      name: "Yeezy Boost 350 V2 - Masculino",
      category: "Tênis",
      image: "https://image.goat.com/750/attachments/product_template_pictures/images/016/928/118/original/155573_00.png.png",
      price: 599,
      discountPercentage: 30,
    },
    {
      marca: "Nike", gender:"Masculino", condition:'Novo',
      id: 6,
      name: "Air Force 1 Low - Masculino",
      category: "Tênis",
      image: "https://image.goat.com/750/attachments/product_template_pictures/images/020/881/688/original/508101_00.png.png",
      price: 499,
      discountPercentage: 30,
    },
    {
      marca: "Nike", gender:"Masculino", condition:'Usado',
      id: 7,
      name: "Air Max 97 - Masculino",
      category: "Tênis",
      image: "https://image.goat.com/750/attachments/product_template_pictures/images/010/988/952/original/180155_00.png.png",
      price: 399,
      discountPercentage: 20,
    },
    {
      marca: "Adidas", gender:"Feminino", condition:'Novo',
      id: 8,
      name: "Adidas Yeezy Boost 350 V2 - Feminino",
      category: "Tênis",
      image: "https://image.goat.com/attachments/product_template_pictures/images/019/471/948/original/487214_00.png.png",
      price: 299,
      discountPercentage: 10,
    },
    {
      marca: "Nike", gender:"Masculino", condition:'Usado',
      id: 9,
      name: "Air Jordan 1 Retro - Masculino",
      category: "Tênis",
      image: "https://image.goat.com/750/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
      price: 2300,
    },
  ];

  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter(product => {
        const matchMarca = selectedFilters.Marca.length === 0 || selectedFilters.Marca.includes(product.marca);
        const matchCategoria = selectedFilters.Categoria.length === 0 || selectedFilters.Categoria.includes(product.category);
        const matchGenero = selectedFilters.Gênero.length === 0 || selectedFilters.Gênero.includes(product.gender);
        const matchEstado = selectedFilters.Estado === 'Todos' || selectedFilters.Estado === product.condition;

        const matchFilter = Object.values(product).some((value) =>
          removeAccents(String(value).toLowerCase()).includes(removeAccents(filter.toLowerCase()))
        );

        return matchMarca && matchCategoria && matchGenero && matchEstado && matchFilter;
      })
      .sort((a, b) => {
        return order === 'low-to-high' ? a.price - b.price : b.price - a.price;
      });
  }, [products, selectedFilters, filter, order]);

  const filters = [
    {
      title: "Marca",
      inputType: "checkbox",
      options: [
        { text: "Adidas" },
        { text: "Balenciaga" },
        { text: "K-Swiss" },
        { text: "Nike" },
        { text: "Puma" },
      ],
    },
    {
      title: "Categoria",
      inputType: "checkbox",
      options: [
        { text: "Esporte e lazer" },
        { text: "Casual" },
        { text: "Utilitário" },
        { text: "Corrida" },
      ],
    },
    {
      title: "Gênero",
      inputType: "checkbox",
      options: [
        { text: "Masculino" },
        { text: "Feminino" },
        { text: "Unisex" },
      ],
    },
    {
      title: "Estado",
      inputType: "radio",
      options: [
        { text: "Todos" },
        { text: "Novo" },
        { text: "Usado" },
      ],
    },
  ];

  return (
    <Layout>
      <Section title={`Resultados para "${filter}" ${filteredAndSortedProducts.length} produtos`} titleAlign="left">
        <PageContainer>
          <Sidebar>
            <OrderSelect order={order} handleOrderChange={handleOrderChange} />
            <FilterContainer>
              <h2>Filtrar por</h2>
              <Divider />
              {filters.map((filter, index) => (
                <FilterGroup
                  key={index}
                  title={filter.title}
                  inputType={filter.inputType}
                  options={filter.options}
                  selectedFilters={selectedFilters}
                  handleFilterChange={handleFilterChange}
                />
              ))}
            </FilterContainer>
          </Sidebar>
          <ContentArea>
          {filteredAndSortedProducts.length === 0 ? (
              <ProductWarning />
            ) : (
              <ProductListing products={filteredAndSortedProducts} />
            )}
          </ContentArea>
        </PageContainer>
      </Section>
    </Layout>
  );
};

export default ProductListingPage;

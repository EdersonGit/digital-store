import React from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 308px;
  margin-left: 10px;
  margin-bottom: 20px;
  gap: 5px;
`;

const Title = styled.h3`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.75px;
  text-align: left;
  width: 46px;
  height: 22px;
  color: #474747;
  margin-left: 20px;
  padding-bottom: 5px;
`;

const FilterOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-align: left;
  color: #474747;
  margin-bottom: 5px;
  margin-left: 20px;

  & input {
    width: 22px;
    height: 22px;
    margin-right: 8px;
    accent-color: #C92071;
    cursor: pointer;
  }

  & label {
    font-size: 14px;
    color: #474747;
  }
`;

const FilterGroup = ({ title, inputType, options, selectedFilters, handleFilterChange }) => {
  return (
    <FilterWrapper>
      <Title>{title}</Title>
      {options.map((option, index) => (
        <FilterOption key={index}>
          <input
            type={inputType}
            id={option.text}
            value={option.text}
            checked={
              inputType === 'checkbox'
                ? selectedFilters[title].includes(option.text)
                : selectedFilters[title] === option.text
            }
            onChange={() => handleFilterChange(title, inputType, option.text)}
          />
          <label htmlFor={option.text}>{option.text}</label>
        </FilterOption>
      ))}
    </FilterWrapper>
  );
};

export default FilterGroup;

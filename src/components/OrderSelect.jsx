import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 60px;
  width: 308px;
  border-radius: 4px;
  background-color: #F9F8FE;
  border: 1px solid #474747;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const Label = styled.label`
    padding: 5px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.75px;
    text-align: left;
    color: #474747;
`;

const Select = styled.select`
    width: 170px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
    text-align: left;
    border: none;
    color: #474747;
    background-color: #F9F8FE;
`;

const OrderSelect = ({ order, handleOrderChange }) => {
    return (
        <SelectWrapper>
            <Label htmlFor="orderSelect">Ordenar por</Label>
            <Select id="orderSelect" name="orderSelect" value={order} onChange={handleOrderChange}>
                <option value="low-to-high">Menor preço</option>
                <option value="high-to-low">Maior preço</option>
            </Select>
        </SelectWrapper>
    );
};

export default OrderSelect;

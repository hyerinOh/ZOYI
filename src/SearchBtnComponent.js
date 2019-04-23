import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 60px;
  background-color: #181818;
  border:none;
  font-size:1em;
  color: #ffffff;
  outline:none;
  display:inline-block;
  box-sizing: border-box;
  border-radius: 50px;
  margin-left: 20px;
`

const SearchBtnComponent = () => (
  <Button>검색</Button>
)

export default SearchBtnComponent;
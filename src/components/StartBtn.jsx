import React from 'react';
import styled from 'styled-components';

const StartBtn = ({ children, ...rest }) => {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};
const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  border: 1px solid #007bff;
  min-width: 20rem;
  max-height: 4rem;
  background: transparent;
  font-size: 2rem;
  padding: 0.6rem;
  cursor: pointer;
  color: #007bff;

  font-family: Pixel, Arial, Helvetica, sans-serif;
  border-radius: 10px;
`;
export default StartBtn;

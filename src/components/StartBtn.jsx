import React from 'react';
import styled from 'styled-components';

const StartBtn = ({ children, ...rest }) => {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};
const ButtonWrapper = styled.button`
  outline: none;
  border: 1px solid #999;
  /* height: 3rem; */
  min-width: 20rem;
  max-height: 4rem;
  background: transparent;
  font-size: 2rem;
  padding: 0.6rem;
  cursor: pointer;
  position: absolute;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  left: 45%;
  top: 47%;
  z-index: 200;
  border-radius: 10px;
`;
export default StartBtn;

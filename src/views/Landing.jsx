import React from 'react';
import styled from 'styled-components';
import Button from '../components/StartBtn';

const Landing = ({ onClick }) => {
  return (
    <Wrapper>
      <Button onClick={onClick}>Start</Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 10;
  top: 0;
  left: 0;
`;
export default Landing;

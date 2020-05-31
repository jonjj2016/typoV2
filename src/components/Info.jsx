import React from 'react';
import Display from './Display';
import styled from 'styled-components';

const Info = () => {
  return (
    <StyledInfoBar>
      <Display info={0} text={'Time'} />
      <Display info={0} text={'LVL'} />
      <Display info={0} text={'Score'} />
    </StyledInfoBar>
  );
};
const StyledInfoBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50vh;
  z-index: -1;
`;
export default Info;

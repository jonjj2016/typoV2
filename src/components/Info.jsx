import React from 'react';
import Display from './Display';
import styled from 'styled-components';
import Bck from '../bck2.png';

const Info = ({ state }) => {
  return (
    <StyledInfoBar>
      {/* <Video src={Vid} autoPlay loop /> */}
      <Display info={state.lvl} text={'LVL'} />
      <Display info={state.score} text={'Score'} />
      <Display warrning={state.warrning} info={state.accuacy} text={'Accuracy'} extra='%' />
      {/* <Button /> */}
    </StyledInfoBar>
  );
};
const StyledInfoBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -4;
  background-color: #000;
  /* background-size: cover; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: '. . . .' '. . . .' '. . . .';
`;

export default Info;

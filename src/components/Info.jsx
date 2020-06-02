import React from 'react';
import Display from './Display';
import styled from 'styled-components';

const Info = ({ state, timer }) => {
  return (
    <StyledInfoBar>
      <Display info={timer} text={'Time'} />
      <Display info={state.lvl} text={'LVL'} />
      <Display info={state.score} text={'Score'} />
      <Display warrning={state.warrning} info={Math.round(100 - (state.wrongTypos / state.allTypos) * 100) || 100} text={'Accuracy'} extra='%' />
      {/* <Display info={state.allTypos} text={'All'} />
      <Display info={state.wrongTypos} text={'All'} /> */}
    </StyledInfoBar>
  );
};
const StyledInfoBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* display: flex;
  align-items: center;
  justify-content: space-around; */
  height: 50vh;
  z-index: -1;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: '. . . .' '. . . .' '. . . .';
`;
export default Info;

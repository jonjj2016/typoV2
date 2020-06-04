import styled from 'styled-components';
import Bck from '../../bck2.png';

export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  font-size: 4rem;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  /* background-image: url(${Bck}); */
  background-size:cover;
  

  background-color: rgba(0, 0, 0, 0.3);
  .finishLine {
    position: absolute;
    width: 100vw;
    height: 2px;
    background-color: transparent;
    border-bottom: 2px solid red;
    top: 930px;
    left: 0;
    z-index: 2;
  }
  overflow: hidden;
`;
export const Line = styled.div `
  width: 100%;
  /* border-right: 2px solid red; */
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-self: center; */
  justify-self: center;
`;
import React, { useEffect, useState } from 'react';
import { getRandomNumber } from '../helpers/helper';
import styled from 'styled-components';

const Element = ({ duration, index, letter, active }) => {
  const [randomDuration, setRandomDuration] = useState(getRandomNumber(duration - 5, duration));
  useEffect(() => {
    setRandomDuration(getRandomNumber(duration - 10, duration));
    console.log(duration, randomDuration);
  }, [duration]);
  return (
    <Span duration={duration && randomDuration} index={index} active={active}>
      {letter}
    </Span>
  );
};
export const Span = styled.span`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  /* position: absolute; */
  align-items: center;
  padding: 0.5rem;
  font-size: 2rem;
  color: #333;
  /* color: ${(props) => (props.active ? 'red' : 'green')}; */
  transition: 1000ms;
  transform: translateY(-100%);
  border-radius: 50%;
  margin-left: 3rem;
  animation-name: ${(props) => (props.duration ? 'animationTopFrames' : '')};
  animation-duration: ${(props) => props.duration}s;
  animation-fill-mode: forwards;
  /* animation-delay: 1s; */
  /* box-shadow: inset -58px -20px 77px -70px rgba(0, 0, 0, 0.43); */
  /* box-shadow: -58px -20px 77px 58px rgba(0, 0, 0, 0.23); */
  box-shadow: inset -58px -20px 77px 58px rgba(${(props) => (props.active ? '0,175,235,0.4' : '243,128,36,0.1')});
  border-bottom: 2px solid rgba(0, 0, 0, 0.07);
  border-right: 1px solid rgba(0, 0, 0, 0.07);
  
  @keyframes animationTopFrames {
    0% {
      transform: translateY(-120%);
    }
    100% {
      transform: translateY(110vh);
    }
  }
`;
export default Element;

import styled from 'styled-components';
import Drop from '../../1.png';
import Drop3 from '../../3.png';

export const Span = styled.span `
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  font-size: 2.5rem;
  text-transform: capitalize;
  /* font-family: Pixel, Arial, Helvetica, sans-serif; */
  color: #007bff;
  color: ${(props) => (props.active ? '#eee' : '#007bff')};

  color: ${(props) => props.warrning && 'red'};
  transition: 500ms;
  margin-left: 3rem;
  animation-name: ${(props) => (props.duration ? 'animationTopFrames' : '')};
  animation-duration: ${(props) => props.duration - 5}s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  font-weight: 300;
  font-weight: 400;
  text-shadow: -7px 2px 6px #333;

  @keyframes animationTopFrames {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    100% {
      transform: translateY(110vh);
    }
  }
`;
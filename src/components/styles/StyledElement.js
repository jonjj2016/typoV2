import styled from 'styled-components';

export const Span = styled.span `
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 2rem;
  color: #333;
  color:${(props) => props.warrning && 'red'};
  /* color: ${(props) => (props.warrning ? 'red' : '#333')}; */
  transition: 500ms;
  /* transform: translateY(-100%); */
  border-radius: 50%;
  /* font-family: Pixel, Arial, Helvetica, sans-serif; */
  margin-left: 3rem;
  animation-name: ${(props) => (props.duration ? 'animationTopFrames' : '')};
  animation-duration: ${(props) => props.duration}s;
  animation-fill-mode: forwards;
  box-shadow: inset -58px -20px 77px 58px rgba(${(props) => (props.active ? '0,175,235,0.4' : '243,128,36,0.1')});
  border-bottom: 2px solid rgba(0, 0, 0, 0.07);
  border-right: 1px solid rgba(0, 0, 0, 0.07);

  @keyframes animationTopFrames {
    0% {
      transform: translateY(-100%);
    }
   
    100% {
        
      transform: translateY(110vh);
    }
  }
`;
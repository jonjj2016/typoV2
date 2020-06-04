import React from 'react';
import styled from 'styled-components';

const Display = ({ info, text, extra, warrning }) => {
  return (
    <DisplayWrapper warrning={warrning}>
      <h1>
        {text}: {info} {extra}
      </h1>
    </DisplayWrapper>
  );
};
const DisplayWrapper = styled.div`
  height: 70%;
  display: flex;
  color: #007bff;
  animation-name: ${(props) => (props.warrning ? 'an' : '')};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  @keyframes an {
    0% {
      background-color: red;
    }
    50% {
      background-color: #eee;
    }

    100% {
      background-color: red;
    }
  }
  justify-content: center;
  align-items: center;
  /* border: 1px solid #888; */
  /* border-radius: 20px; */
  font-family: Pixel, Arial, Helvetica, sans-serif;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
  width: 98%;
  min-height: 20vh;
`;
export default Display;

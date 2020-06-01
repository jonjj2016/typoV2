import React from 'react';
import styled from 'styled-components';

const Display = ({ info, text, extra }) => {
  return (
    <DisplayWrapper>
      <h1>
        {text}: {info} {extra}
      </h1>
    </DisplayWrapper>
  );
};
const DisplayWrapper = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #888;
  border-radius: 20px;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  min-height: 20vh;
`;
export default Display;

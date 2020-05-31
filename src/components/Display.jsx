import React from 'react';
import styled from 'styled-components';

const Display = ({ info, text }) => {
  return (
    <DisplayWrapper>
      <h1>
        {text}: {info}
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
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
  width: 30%;
`;
export default Display;

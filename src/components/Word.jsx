import React from 'react';
import styled from 'styled-components';

const Word = ({ children }) => {
  console.log();
  return (
    <Word>
      <Wrapper>{children}</Wrapper>
    </Word>
  );
};
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export default Word;
